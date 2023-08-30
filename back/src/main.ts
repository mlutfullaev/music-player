import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";


const start = async () => {
  const port = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule)
  await app.listen(port, () => {
    console.log("listening on port " + port);
  })
}

start();