import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    MongooseModule.forRoot(`mongodb+srv://admin:admin@cluster0.mvwxcwx.mongodb.net/?retryWrites=true&w=majority`),
    TrackModule
  ]
})
export class AppModule {

}