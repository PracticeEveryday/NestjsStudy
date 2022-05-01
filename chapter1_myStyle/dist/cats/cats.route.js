"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catRouter = void 0;
var express_1 = require("express");
var cats_service_1 = require("./cats.service");
var catRouter = (0, express_1.Router)();
exports.catRouter = catRouter;
catRouter.get("/cats", cats_service_1.findAll);
catRouter.get("/cats/:id", function (req, res) {
    var id = req.params.id;
    var cat = cats_service_1.catService.findcat(id);
    res.status(200).json(cat);
});
catRouter.post("/cats", function (req, res) {
    var newCatData = req.body;
    var newCat = cats_service_1.catService.create(newCatData);
    res.status(200).json(newCat);
});
catRouter.put("/cats/:id", function (req, res) {
    var id = req.params.id;
    var updateData = req.body;
    var modifiedCat = cats_service_1.catService.modify(id, updateData);
    res.status(200).json(modifiedCat);
});
catRouter.patch("/cats/:id", function (req, res) {
    var id = req.params.id;
    var updateData = req.body;
    var modifiedCat = cats_service_1.catService.modifyPartial(id, updateData);
    res.status(200).json(modifiedCat);
});
//# sourceMappingURL=cats.route.js.map