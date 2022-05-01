"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_route_1 = require("./cats/cats.route");
var app = express();
app.get("/", function (req, res) {
    res.status(200).json({ status: "succ" });
});
app.use(express.json());
app.use(cats_route_1.catRouter);
app.listen(3000, function () { return console.log("3000번 포트 온"); });
//# sourceMappingURL=app.js.map