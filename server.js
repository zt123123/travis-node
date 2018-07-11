const Koa = require("koa")
const router = new require('koa-router')()

let app = new Koa();
app.use(router.routes());

router.get("/list", async (ctx, next) => {
    ctx.body={
        name: "zhangtian",
        age: 24
    };
    await next()
})

module.exports = app
