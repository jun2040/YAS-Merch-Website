import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

// Import database
import db from './config/database.config';

// Import router
import apiRouter from './routes/api';

// Test db
db.authenticate().then(() => {
    console.log('connected to db');
});

// Define app
const app = express();

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

// Router setup
app.use('/api', apiRouter);

// Catch all routes and send client
app.use('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})

// Catch 404 & forward to error handler
app.use(function(req, res, next) {
    next(createHttpError(404));
});

// Error handler
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    // Error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Render the error page
    res.status(err.status || 500);
    res.render('error');
}

app.use(errorHandler);

export default app;
