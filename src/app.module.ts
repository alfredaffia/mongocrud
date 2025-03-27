import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
//     ConfigModule.forRoot({
// envFilePath:'.env',
// isGlobal:true,
//     }),
    MongooseModule.forRoot('mongodb://localhost:27017/MOOGO',
      // process.env.DB_URI
    ),

    BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}


