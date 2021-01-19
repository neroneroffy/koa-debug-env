const Koa = require('../koa/lib/application.js');
const serve = require('koa-static');
const app = new Koa();

// response
app.use(serve('public'));
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000, () => {
  console.log('server running at 3000')
});
