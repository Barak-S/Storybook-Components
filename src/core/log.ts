/* eslint-disable no-console */
import { isDate, isNumber, isString, reduce } from 'lodash';

export enum LogLevel {
  Error = 0,
  Warn = 1,
  Info = 2,
  Debug = 3,
  Trace = 4,
  Time = 5,
}

let enabled: boolean = true;
let colorized: boolean = false;
const minLevel: LogLevel = LogLevel.Trace;

export const setLogEnabled = (val: boolean) => {
  enabled = val;
};

export const setLogColorized = (val: boolean) => {
  colorized = val;
};

export const logLevelToSymbol = (level: LogLevel) => {
  switch (level) {
    case LogLevel.Debug:
      return '-';
    case LogLevel.Info:
      return '+';
    case LogLevel.Warn:
      return '!';
    case LogLevel.Error:
      return 'x';
    case LogLevel.Trace:
      return '*';
    case LogLevel.Time:
      return 'T';
    default:
      return '';
  }
};

const logDataItemToStr = (data: unknown): string => {
  if (data === undefined) {
    return 'undefined';
  }
  if (data === null) {
    return 'null';
  }
  if (!data) {
    return 'undefined';
  }
  if (isString(data)) {
    return data;
  }
  if (isNumber(data)) {
    return `${data}`;
  }
  if (isDate(data)) {
    return data.toString();
  }
  if (!data) {
    return '';
  }
  try {
    return JSON.stringify(data);
  } catch (err: unknown) {
    if (typeof data === 'object' && data) {
      // Rule disabled cost this is the edge case
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      return data.toString();
    }
    return '';
  }
};

export const logDataArrToStr = (data: unknown[]): string => {
  if (!data.length) {
    return '';
  }
  return reduce(data, (memo, item) => (memo ? `${memo} ${logDataItemToStr(item)}` : logDataItemToStr(item)), '');
};

interface LogColor {
  color: string;
  background?: string;
}

const logLevelToColor = (level: LogLevel): LogColor => {
  const defColor: LogColor = { color: '#000000' };
  switch (level) {
    case LogLevel.Trace:
      return { color: '#a3a3a3' };
    case LogLevel.Debug:
      return { color: '#51555A' };
    case LogLevel.Info:
      return { color: '#FFFFFF', background: '#0022F5' };
    case LogLevel.Warn:
      return { color: '#FFFFFF', background: '#FF9501' };
    case LogLevel.Error:
      return { color: '#FFFFFF', background: '#FC2500' };
    default:
      return defColor;
  }
};

const logColorsToStr = ({ color, background }: LogColor) => {
  if (!background) {
    return `color: ${color}`;
  }
  return `background: ${background}; color: ${color}`;
};

const logPrefixData = (level: LogLevel, module: string): string[] => {
  const symbol = logLevelToSymbol(level);
  if (!colorized) {
    return [`[${symbol}][${module}]:`];
  }
  const colorStr = logColorsToStr(logLevelToColor(level));
  return [`%c[${symbol}][${module}]:`, colorStr];
};

export const logToStr = (m: string, level: LogLevel, data: unknown[]): string => {
  const symbol = logLevelToSymbol(level);
  const str = logDataArrToStr(data);
  return `[${symbol}][${m}]: ${str}`;
};

export const Log = (m: string) => {
  const logWithLevel = (level: LogLevel, data: unknown[]) => {
    if (!enabled || level > minLevel) {
      return;
    }
    const prefix = logPrefixData(level, m);
    switch (level) {
      case LogLevel.Debug:
        return console.log(...prefix, ...data);
      case LogLevel.Info:
        return console.log(...prefix, ...data);
      case LogLevel.Warn:
        return console.log(...prefix, ...data);
      case LogLevel.Error:
        return console.log(...prefix, ...data);
      case LogLevel.Trace:
        return console.log(...prefix, ...data);
      default:
        return console.log(...prefix, ...data);
    }
  };

  const trace = (...data: unknown[]) => {
    logWithLevel(LogLevel.Trace, data);
  };

  const debug = (...data: unknown[]) => {
    logWithLevel(LogLevel.Debug, data);
  };

  const info = (...data: unknown[]) => {
    logWithLevel(LogLevel.Info, data);
  };

  const warn = (...data: unknown[]) => {
    logWithLevel(LogLevel.Warn, data);
  };

  const err = (...data: unknown[]) => {
    logWithLevel(LogLevel.Error, data);
  };

  const start = (marker: string) => {
    if (!enabled) {
      return;
    }
    console.time(`${logPrefixData(LogLevel.Time, m).join(' ')} ${marker}`);
  };

  const end = (marker: string) => {
    if (!enabled) {
      return;
    }
    console.timeEnd(`${logPrefixData(LogLevel.Time, m).join(' ')} ${marker}`);
  };

  return { trace, debug, info, warn, err, start, end };
};

export type LogHandler = ReturnType<typeof Log>;
