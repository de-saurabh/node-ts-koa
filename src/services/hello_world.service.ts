export class HelloWorldService {
    async greetHelloWorld(user: string): Promise<string> {
        return `Hello ${user}`
    }
}