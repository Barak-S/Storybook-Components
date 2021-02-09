"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processVersionCmd = void 0;
var log_1 = require("../utils/log");
var fs_1 = require("fs");
var types_1 = require("../utils/types");
var log = log_1.Log('version');
var processVersionCmd = function (command, args, _a) {
    var cwd = _a.cwd, logLevel = _a.logLevel;
    try {
        log.setLevel(logLevel);
        if (command.length === 0) {
            return processGetVersionCmd(cwd);
        }
        if (command[0] === 'get') {
            return processGetVersionCmd(cwd);
        }
        throw new Error("unknown version command \"" + command[0] + "\"");
    }
    catch (err) {
        return log.errAndExit(err.message);
    }
};
exports.processVersionCmd = processVersionCmd;
var processGetVersionCmd = function (cwd) {
    var data = getPackageData(cwd);
    log.simple(data.version);
};
var getPackageData = function (cwd) {
    var packagePath = cwd + "/package.json";
    if (!fs_1.existsSync(packagePath)) {
        throw new Error("package.json file not found at path \"" + cwd + "\"");
    }
    var str = fs_1.readFileSync(packagePath, 'utf-8');
    var data = JSON.parse(str);
    if (!types_1.isUnknownDict(data)) {
        throw new Error('package.json file data is empty');
    }
    if (typeof data.version !== 'string') {
        throw new Error('package.json file "version" field not found');
    }
    return data;
};
