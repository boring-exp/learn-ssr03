import Koa from 'koa'
import serve from 'koa-static'
import path from 'node:path'

const app = new Koa();

// 静态文件中间件
console.log(path.join(process.cwd(), '/static'))
app.use(serve(path.join(process.cwd(), './static')));

app.listen(3000, () => {
  console.log('服务器已启动，监听端口 3000');
});
