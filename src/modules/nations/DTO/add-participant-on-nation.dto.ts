import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class AddParticipantOnNationDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  participantToAdd: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  nationId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  nationEventId: string;
}
