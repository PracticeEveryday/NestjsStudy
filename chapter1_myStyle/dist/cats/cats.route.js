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
//# sourceMappingURL=cats.route.js.map