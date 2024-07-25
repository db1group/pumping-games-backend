import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Logo do time',
  })
  logo: Buffer;

  @ApiProperty()
  @IsNotEmpty()
  season?: string;
}
