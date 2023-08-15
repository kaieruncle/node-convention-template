import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import path from 'path';
import staticResource from 'koa-static';
import config from '@/core/config';
import { catchError } from '@/middlewares/exception';
import r from '@/routes/index';
const app = new Koa();
const { ip, port, keys } = config;
app.keys = keys;
/**
 * 全局中间件
 */
// body-parser
app.use(bodyParser());
// 跨域
app.use(cors({
  origin: "*",
  credentials: true
}));
// 托管静态文件
app.use(staticResource(path.join(__dirname, '../', 'assets')))

// 统一异常处理
app.use(catchError);

// 注册路由
r(app)

/**
 * 启动服务
 */
app.listen(port, () => {
  console.log(`服务地址:${ip}:${port}`)
});