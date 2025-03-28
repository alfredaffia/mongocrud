import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Book } from './schemas/book.schema';
// import { Book } from './schemas/book.schema';
@ApiTags('books')
@Controller('books')
export class BookController {
    constructor(
        private bookService: BookService
    ) { }
    @Post('new')
    @ApiOperation({ summary: 'Get all books' })
    @ApiResponse({ status: 200, description: 'Return all books.' })
    async createbook(@Body() book:CreateBookDto,) //: Promise<Book>
    {
        return this.bookService.create(book);
    }

    @Get()
    @ApiOperation({ summary: 'Get all books' })
    @ApiResponse({ status: 200, description: 'Return all books.' })
    async getAllBook() //: Promise<Book[]> 
    {    
        return await this.bookService.findAll();
    }


    // @Put(':id')
    // async update(@Param('id') id: number, @Body() updateData: Partial<Book>) {
    //   return  await this.bookService.update(id, updateData);
    // }
    
    @Get(':id')
    @ApiOperation({summary:'get a specific book'})
    @ApiResponse({status: 200,description:'book retrieved successfully'})
    findOne(@Param('id') id: string) {
      return this.bookService.findOne(id);
    }
  
    @Patch(':id')
    @ApiOperation({summary:'update a specific Book'})
    @ApiResponse({status: 200,description:'Book updated successfully'})
    async updateUser(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
      return this.bookService.update(id, updateBookDto);
    }
  
    @Delete(':id')
    @ApiOperation({summary:'delete a specific book'})
    @ApiResponse({status: 200,description:'Book deleted successfully'})
    async removeUser(@Param('id') id: string) {
      return this.bookService.remove(id);
    }
}
