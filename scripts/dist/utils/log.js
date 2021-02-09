"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.LogLevel = void 0;
/* eslint-disable no-console */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["none"] = -1] = "none";
    LogLevel[LogLevel["err"] = 0] = "err";
    LogLevel[LogLevel["warn"] = 1] = "warn";
    LogLevel[LogLevel["info"] = 2] = "info";
    LogLevel[LogLevel["debug"] = 3] = "debug";
    LogLevel[LogLevel["trace"] = 4] = "trace";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var Log = function (m, defLevel) {
    if (defLevel === void 0) { defLevel = LogLevel.trace; }
    var level = defLevel;
    var setLevel = function (val) { return (level = val); };
    return {
        err: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return (level >= LogLevel.err ? console.log.apply(console, __spreadArrays(["[x][" + m + "]:"], args)) : undefined);
        },
        warn: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return (level >= LogLevel.warn ? console.log.apply(console, __spreadArrays(["[!][" + m + "]:"], args)) : undefined);
        },
        info: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return (level >= LogLevel.info ? console.log.apply(console, __spreadArrays(["[+][" + m + "]:"], args)) : undefined);
        },
        debug: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return (level >= LogLevel.debug ? console.log.apply(console, __spreadArrays(["[-][" + m + "]:"], args)) : undefined);
        },
        trace: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return (level >= LogLevel.trace ? console.log.apply(console, __spreadArrays(["[*][" + m + "]:"], args)) : undefined);
        },
        errAndExit: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log.apply(console, __spreadArrays(["[x][" + m + "]:"], args));
            process.exit(1);
        },
        simple: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return console.log.apply(console, args);
        },
        setLevel: setLevel,
    };
};
exports.Log = Log;
