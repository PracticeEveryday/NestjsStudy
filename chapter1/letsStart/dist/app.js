"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 8000;
app.get("/", function (req, res) {
    res.send({ name: "kim", age: 28 });
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
//# sourceMappingURL=app.js.map