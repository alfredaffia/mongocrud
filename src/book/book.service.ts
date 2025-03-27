import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    ) { }


    async findAll()//: Promise<Book[]> 
    {
        const books = await this.bookModel.find();
        return books
    }

    async create(book: CreateBookDto) //: Promise<Book>
    {
        const createBook = await this.bookModel.create(book);
        return createBook;
    }

    async findOne(id: string) {
        const find = await this.bookModel.findOne({ where: { id } });
        if (!find) {

            throw new NotFoundException('Book not found');
        }
        return find;
    }

    async updateById(id: string, book: Book) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new NotFoundException(`Invalid ID format: ${id}`);
        }

        const updatedBook = await this.bookModel.findByIdAndUpdate(id, book, {
            new: true,
            runValidators: true,
        });

        if (!updatedBook) {
            throw new NotFoundException(`Book with ID ${id} not found`);
        }

        return updatedBook;
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