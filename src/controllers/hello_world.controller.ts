import { Context } from "koa";
import { HelloWorldService } from "../services/hello_world.service";


export default class HelloWorldController {
    public static async greetHelloWorld(ctx: Context) {
        try {
            const helloWorldService = new HelloWorldService();
            const {user} = ctx.request.body;
            const helloWorld: any = await helloWorldService.greetHelloWorld(user);
            ctx.body = helloWorld;
        } catch (e) {
            ctx.body = e;
        }
    }
}