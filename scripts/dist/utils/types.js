"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUnknownDict = void 0;
var isUnknownDict = function (candidate) {
    return typeof candidate === 'object' && candidate !== null;
};
exports.isUnknownDict = isUnknownDict;
