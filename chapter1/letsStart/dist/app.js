"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
var data = [1, 2, 3, 4];
app.get("/", function (req, res) {
    console.log(req.rawHeaders);
    res.send({ cats: app_model_1.Cat });
});
app.get("/cats/blue", function (req, res) {
    console.log(req.rawHeaders[1]);
    res.send({ cats: app_model_1.Cat, blue: app_model_1.Cat[0] });
});
app.get("/cats/som", function (req, res) {
    console.log(req.rawHeaders[1]);
    res.send({ som: app_model_1.Cat[1] });
});
app.listen(8000, function () {
    console.log("server on..");
});
//# sourceMappingURL=app.js.map