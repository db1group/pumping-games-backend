import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateNationDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  nationEventId: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Logo do time',
  })
  logo: Buffer;
}
