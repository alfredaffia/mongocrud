import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
// import { Book } from './schemas/book.schema';

@Controller('books')
export class BookController {
    constructor(
        private bookService: BookService
    ) { }
    @Get()
    async getAllBooks() //: Promise<Book[]> 
    {    
        return await this.bookService.findAll();
    }

    @Post('new')
    async createbook(@Body() book:CreateBookDto,) //: Promise<Book>
    {
        return this.bookService.create(book);
    }

    @Get(':id')
    async getBooksById(@Param('id') id:string) //: Promise<Book[]> 
    {    
        return await this.bookService.findOne(id);
    }

    // @Put(':id')
    // async UpdateBook(@Param('id') id: string, @Body() updatebook: UpdateBookDto) {
    //     return this.bookService.updateById(id, updatebook);
    // }
}
