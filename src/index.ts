
import {App} from './app'

const main = async () => {

const app =new App(4500);
await app.listen();
}

main()