import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema(
//     {
//     timestamps:true
// }
)
export class Book{
    @ApiProperty({example:"Headmaster",description:"The name of the book"})
    @Prop()
    title:string;

    @ApiProperty({example:"MUST Read ",description:"The DESCRIPTION of the book"})
    @Prop()
description:string;

@ApiProperty({example:false,description:"The status of the book"})
@Prop({default: false}) 
isBlocked: boolean;

}

export const BookSchema =SchemaFactory.createForClass(Book) 
