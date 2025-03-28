import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    ) { }

    async create(book:CreateBookDto) //: Promise<Book>
    {
        const createBook = await this.bookModel.create(book);
        return createBook;
    }


    async findAll()//: Promise<Book[]> 
    {
        const books = await this.bookModel.find();
        return books
    }

    async findOne(id: string) {
        const user =await this.bookModel.findById(id).exec()
        if(user) return user
        return  new HttpException('book not found', 404) ;
      }
    
      update(id: string, updateBookDto: UpdateBookDto) {
        
        const update = this.bookModel.findByIdAndUpdate(id, updateBookDto);
        if(!update){
throw new NotFoundException('Book not found')
        }
        return update;
      }



     async remove(id: string) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new NotFoundException(`Invalid ID format: ${id}`);
        }

        const result = await this.bookModel.findByIdAndDelete(id);

        if (!result) {
            throw new NotFoundException(`Library record with ID ${id} not found`);
        }

        return {
            message: `Library record with ID ${id} deleted successfully`,
        };
    }
}