import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
    @ApiProperty({example:"Headmaster",description:"The name of the book"})
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({example:"Headmaster",description:"The name of the book"})
    @IsString()
    @IsNotEmpty()
    description: string;
    // Add other fields as necessary
}
