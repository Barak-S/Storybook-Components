#! /usr/bin/env node

import { Log, LogLevel } from './utils/log';
import minimist, { ParsedArgs } from 'minimist';
import { processVersionCmd } from './commands/version';
import { processChangelogCmd } from './commands/changelog';

const log = Log('cli', LogLevel.info);
const cwd = process.cwd();

const processArgs = (args: ParsedArgs) => {
  // Check for verbose mode
  const logLevel = args.v === true ? LogLevel.trace : LogLevel.none;
  log.setLevel(logLevel);
  // Current path
  log.debug('cwd=', cwd);
  // Parsing commands
  if (args._.length) {
    const cmd = args._[0];
    if (cmd === 'version') {
      return processVersionCmd(args._.slice(1), args, { cwd, logLevel });
    }
    if (cmd === 'changelog') {
      return processChangelogCmd(args._.slice(1), args, { cwd, logLevel });
    }
    return log.errAndExit(`unknown command "${cmd}"`);
  } else {
    return log.errAndExit('command required');
  }
};

processArgs(minimist(((process.argv as unknown[]) as string[]).slice(2)));
