import Koa from 'koa'
import serve from 'koa-static'
import path from 'node:path'
import router from 'koa-router'
import {
  renderToString,
  app
} from './src/client.js'

const rt = new router()
rt.get('/', async (ctx) => {
  const ssrHtml = await renderToString(app)
  ctx.body = `
  <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
      </head>
      <body>
        <div id="app">${ssrHtml}</div>
      </body>
    </html>
  `
})


const server = new Koa();
server.use(rt.routes()).use(rt.allowedMethods())
server.listen(3000, () => {
  console.log('服务器已启动，监听端口 3000');
});
