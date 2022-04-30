"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
var data = [1, 2, 3, 4];
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("this is logging middleware");
    next();
});
app.get("/cats", function (req, res) {
    try {
        var cats = app_model_1.Cat;
        res.status(200).send({
            status: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            status: false,
            message: error.message,
        });
    }
});
app.get("/cats/:id", function (req, res) {
    try {
        var id_1 = req.params.id;
        var cats = app_model_1.Cat.find(function (cat) {
            return cat.id === id_1;
        });
        res.status(200).send({
            status: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            status: false,
            message: error.message,
        });
    }
});
app.use(express.json());
app.post("/cats", function (req, res) {
    try {
        var data_1 = req.body;
        app_model_1.Cat.push(data_1);
        res.status(200).send({
            status: "succ",
            data: { data: data_1 },
        });
    }
    catch (error) {
        res.status(400).send({
            status: false,
            message: error.message,
        });
    }
});
app.use(function (req, res) {
    console.log("this is error middleware");
    res.send({ error: "404 not found" });
});
app.listen(8000, function () {
    console.log("server on..");
});
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("this is middleware");
    next();
});
//# sourceMappingURL=app.js.map