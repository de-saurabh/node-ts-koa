import Koa from "koa";
import Router from "koa-router";

import logger from "koa-logger";
import json from "koa-json";
import bodyParser from "koa-bodyparser";

const app = new Koa();

// Middlewares
app.use(json());
app.use(logger());

// Routes
const {router} = require('./routes');
app.use(bodyParser({jsonLimit: '5mb'}))
app.use(router.routes());

app.listen(3000, () => {
    console.log("Koa started");
});