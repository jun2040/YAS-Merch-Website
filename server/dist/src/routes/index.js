"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Get
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
exports.default = router;
