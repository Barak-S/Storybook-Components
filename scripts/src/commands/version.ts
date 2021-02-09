import { Log } from '../utils/log';
import { CLIOpts } from '../utils/cli';
import { existsSync, readFileSync } from 'fs';
import { isUnknownDict } from '../utils/types';

const log = Log('version');

export const processVersionCmd = (command: string[], args: Record<string, any>, { cwd, logLevel }: CLIOpts) => {
  try {
    log.setLevel(logLevel);
    if (command.length === 0) {
      return processGetVersionCmd(cwd);
    }
    if (command[0] === 'get') {
      return processGetVersionCmd(cwd);
    }
    throw new Error(`unknown version command "${command[0]}"`);
  } catch (err) {
    return log.errAndExit(err.message);
  }
};

const processGetVersionCmd = (cwd: string) => {
  const data = getPackageData(cwd);
  log.simple(data.version);
};

const getPackageData = (cwd: string) => {
  const packagePath = `${cwd}/package.json`;
  if (!existsSync(packagePath)) {
    throw new Error(`package.json file not found at path "${cwd}"`);
  }
  const str = readFileSync(packagePath, 'utf-8');
  const data = JSON.parse(str);
  if (!isUnknownDict(data)) {
    throw new Error('package.json file data is empty');
  }
  if (typeof data.version !== 'string') {
    throw new Error('package.json file "version" field not found');
  }
  return data;
};
