#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var log_1 = require("./utils/log");
var minimist_1 = __importDefault(require("minimist"));
var version_1 = require("./commands/version");
var changelog_1 = require("./commands/changelog");
var log = log_1.Log('cli', log_1.LogLevel.info);
var cwd = process.cwd();
var processArgs = function (args) {
    // Check for verbose mode
    var logLevel = args.v === true ? log_1.LogLevel.trace : log_1.LogLevel.none;
    log.setLevel(logLevel);
    // Current path
    log.debug('cwd=', cwd);
    // Parsing commands
    if (args._.length) {
        var cmd = args._[0];
        if (cmd === 'version') {
            return version_1.processVersionCmd(args._.slice(1), args, { cwd: cwd, logLevel: logLevel });
        }
        if (cmd === 'changelog') {
            return changelog_1.processChangelogCmd(args._.slice(1), args, { cwd: cwd, logLevel: logLevel });
        }
        return log.errAndExit("unknown command \"" + cmd + "\"");
    }
    else {
        return log.errAndExit('command required');
    }
};
processArgs(minimist_1.default(process.argv.slice(2)));
