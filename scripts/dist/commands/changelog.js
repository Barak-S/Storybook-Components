"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processChangelogCmd = void 0;
var log_1 = require("../utils/log");
var fs_1 = require("fs");
var log = log_1.Log('changelog');
var processChangelogCmd = function (command, args, _a) {
    var cwd = _a.cwd, logLevel = _a.logLevel;
    try {
        log.setLevel(logLevel);
        if (command.length === 0) {
            return getChangelog(cwd, args);
        }
        if (command[0] === 'get') {
            return getChangelog(cwd, args);
        }
        throw new Error("unknown changelog command \"" + command[0] + "\"");
    }
    catch (err) {
        return log.errAndExit(err.message);
    }
};
exports.processChangelogCmd = processChangelogCmd;
var getChangelog = function (cwd, args) {
    var str = getChangelogStr(cwd);
    var changelog = strToChangelog(str);
    var verParam = args.v || args.version;
    if (typeof verParam === 'string' || typeof verParam === 'number') {
        var sections = getChangelogSectionsWithVersonNamePattern(changelog, "" + verParam);
        return log.simple(sectionsToStr(sections));
    }
    return log.simple(changelogToStr(changelog));
};
// File
var getChangelogStr = function (cwd) {
    var filePath = cwd + "/CHANGELOG.md";
    if (!fs_1.existsSync(filePath)) {
        throw new Error("changelog file not found at path \"" + filePath + "\"");
    }
    return fs_1.readFileSync(filePath, 'utf-8');
};
var strToChangelog = function (val) {
    var lines = val.split('\n');
    var versions = [];
    var curBody = [];
    var curVersion = undefined;
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var verData = strToVersion(line);
        if (verData) {
            if (curVersion) {
                versions.push(__assign(__assign({}, curVersion), { sections: strsToSections(curBody) }));
            }
            curVersion = verData;
            curBody = [];
        }
        else {
            curBody.push(line);
        }
    }
    if (curVersion) {
        versions.push(__assign(__assign({}, curVersion), { sections: strsToSections(curBody) }));
    }
    return { versions: versions };
};
var strToVersion = function (val) {
    var match = /^##\s*\[([\d.]+)\]\s*-\s*(.+)$/.exec(val);
    return match ? { name: match[1], date: match[2].trim(), sections: [] } : undefined;
};
var strsToSections = function (val) {
    var sections = [];
    var curName = undefined;
    var curItems = [];
    for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
        var rawLine = val_1[_i];
        var line = rawLine.trim();
        if (!line) {
            continue;
        }
        var name_1 = strToSectionName(line);
        if (name_1) {
            if (curName) {
                sections.push({ name: curName, items: curItems });
            }
            curName = name_1;
            curItems = [];
        }
        else {
            curItems.push(modSectionItemStr(line));
        }
    }
    if (curName) {
        sections.push({ name: curName, items: curItems });
    }
    return sections;
};
var strToSectionName = function (val) {
    var match = /^###\s*(.+)$/.exec(val);
    return match ? match[1].trim() : undefined;
};
var modSectionItemStr = function (val) {
    var modVal = val.replace(/^\s*-\s*/g, '');
    modVal = modVal.trim();
    return modVal;
};
// Building
var changelogToStr = function (_a) {
    var versions = _a.versions;
    var lines = versions.map(function (itm) { return versionToStr(itm); });
    return "" + lines.join('\n\n');
};
var versionToStr = function (version) {
    var lines = ["## [" + version.name + "] - " + version.date];
    lines.push(sectionsToStr(version.sections));
    return lines.join('\n');
};
var sectionsToStr = function (sections) {
    return sections.sort(sortSectionByNameFn).map(sectionToStr).join('\n\n');
};
var sortSectionByNameFn = function (a, b) {
    if (a === b) {
        return 0;
    }
    else {
        return a < b ? 0 : 1;
    }
};
var sectionToStr = function (section) {
    var lines = ["### " + section.name];
    var items = section.items.sort().map(function (itm) { return "- " + itm; });
    lines.push.apply(lines, items);
    return lines.join('\n');
};
// Manipulations
var getChangelogSectionsWithVersonNamePattern = function (changelog, versionName) {
    var _a;
    var filtVersions = changelog.versions.filter(function (itm) { return itm.name.indexOf(versionName) >= 0; });
    if (!filtVersions.length) {
        return [];
    }
    var obj = {};
    for (var _i = 0, filtVersions_1 = filtVersions; _i < filtVersions_1.length; _i++) {
        var version = filtVersions_1[_i];
        for (var _b = 0, _c = version.sections; _b < _c.length; _b++) {
            var section = _c[_b];
            if (obj[section.name]) {
                (_a = obj[section.name]).push.apply(_a, section.items);
            }
            else {
                obj[section.name] = section.items;
            }
        }
    }
    var keys = Object.keys(obj).sort();
    return keys.map(function (key) { return ({ name: key, items: obj[key].sort() }); });
};
