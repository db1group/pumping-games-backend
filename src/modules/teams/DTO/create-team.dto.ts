import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Participant } from 'src/domain/entities/participant/participant';

export class CreateTeamDto {
  @ApiProperty()
  description: string;

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
  players?: Participant[];
}
