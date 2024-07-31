import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUUID, Min } from 'class-validator';

export class CreateTeamLeagueDto {
  @ApiProperty()
  @IsUUID()
  nationEventId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  minTeams: number;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  maxTeams: number;

  @ApiProperty()
  @IsString()
  season: string;
}
