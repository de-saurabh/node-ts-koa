import Router from "koa-router";
import HelloWorldController from "../controllers/hello_world.controller";

const router = new Router();

router.get("/hello-user", HelloWorldController.greetHelloWorld);
export { router };

