import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
//     ConfigModule.forRoot({
// envFilePath:'.env',
// isGlobal:true,
//     }),
    MongooseModule.forRoot('mongodb+srv://alfredaffia478:Alfred_0211.@crud1.etznzqn.mongodb.net/MONGO',
      // process.env.DB_URI
    ),

    BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}


