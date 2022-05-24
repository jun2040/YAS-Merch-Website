"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
// Import router
const index_1 = __importDefault(require("./routes/index"));
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
// Middleware setup
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, 'build')));
// Router setup
app.use('/', index_1.default);
app.use('/users', users_1.default);
// Catch 404 & forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// Error handler
const errorHandler = (err, req, res, next) => {
    // Error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // Render the error page
    res.status(err.status || 500);
    res.render('error');
};
app.use(errorHandler);
exports.default = app;
