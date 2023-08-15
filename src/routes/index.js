import Router from '@koa/router';
import systemRouter from '@/routes/system'
const router = new Router();
export default app => {
    systemRouter(router)
    app.use(router.routes()).use(router.allowedMethods());
}