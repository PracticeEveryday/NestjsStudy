"use strict";
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
    return catService;
}());
exports.catService = catService;
//# sourceMappingURL=cats.service.js.map