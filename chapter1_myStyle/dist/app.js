"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_route_1 = require("./cats/cats.route");
var Server = (function () {
    function Server() {
        var app = express();
        this.app = app;
    }
    Server.prototype.setRouter = function () {
        this.app.get("/", function (req, res) {
            res.status(200).json({ status: "succ" });
        });
        this.app.use(cats_route_1.catRouter);
    };
    Server.prototype.setMiddleware = function () {
        this.app.use(function (req, res, next) {
            console.log(req.rawHeaders[1]);
            console.log("this is logging middleware");
            next();
        });
        this.app.use(express.json());
        this.setRouter();
        this.app.use(function (req, res) {
            console.log("this is error middleware");
            res.json({ error: "404 not found" });
        });
    };
    Server.prototype.init = function () {
        this.setMiddleware;
        this.app.listen(8000, function () {
            console.log("8000번 포트 온");
        });
    };
    return Server;
}());
var server = new Server();
server.init();
//# sourceMappingURL=app.js.map