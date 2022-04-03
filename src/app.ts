import express, { Request, Response, NextFunction } from 'express';

const app = express();

const routers = require('./routes');

app.use('/', routers);

app.listen('8080', () => {
    console.log(`
        ################################################
        🛡️  Node Server listening on port: 8080🛡️
        ################################################
    `);
});