const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const app = new Koa();

// log request URL:
app.use(async(ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add body middleware:
app.use(bodyParser());

// add controller middleware:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');