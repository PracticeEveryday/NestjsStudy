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
exports.catService = exports.findAll = void 0;
var cats_model_1 = require("./cats.model");
var findAll = function (req, res) {
    var cats = cats_model_1.Cat;
    res.status(200).json(cats);
};
exports.findAll = findAll;
var catService = (function () {
    function catService() {
    }
    catService.findcat = function (id) {
        var cat = cats_model_1.Cat.filter(function (cat) { return cat.id === id; });
        return cat;
    };
    catService.create = function (newCatData) {
        cats_model_1.Cat.push(newCatData);
        return cats_model_1.Cat;
    };
    catService.modify = function (id, updateData) {
        var result;
        cats_model_1.Cat.filter(function (cat) {
            if (cat.id === id) {
                cat = updateData;
                result = cat;
            }
        });
        return result;
    };
    catService.modifyPartial = function (id, updateData) {
        var result;
        cats_model_1.Cat.filter(function (cat) {
            if (cat.id === id) {
                cat = __assign(__assign({}, cat), updateData);
                result = cat;
            }
        });
        return result;
    };
    catService.delete = function (id) {
        var result = [];
        cats_model_1.Cat.filter(function (cat) {
            if (cat.id !== id) {
                result.push(cat);
            }
        });
        return result;
    };
    return catService;
}());
exports.catService = catService;
//# sourceMappingURL=cats.service.js.map