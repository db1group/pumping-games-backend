import {
  Body,
  Controller,
  HttpException,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateNationDto } from '../DTO/create-nation.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { AuthenticatedUser, Roles } from 'nest-keycloak-connect';
import { roles } from 'src/infra/auth/roles';
import {
  CreateNation,
  CreateNationInput,
} from 'src/application/usecases/nation/create-nation';
import { KeycloakAuthGuard } from 'src/infra/auth/auth.guard';
import { User } from 'src/domain/entities/user/user';
import { AddParticipantOnNationDto } from '../DTO/add-participant-on-nation.dto';
import { AddParticipantOnNation } from 'src/application/usecases/nation/add-participant-on-nation';

@Controller('nations')
export class NationController {
  constructor(
    private readonly createNation: CreateNation,
    private readonly addParticipantOnNation: AddParticipantOnNation,
  ) {}

  @Post('/create-nation')
  @UseInterceptors(FileInterceptor('logo'))
  @UseGuards(KeycloakAuthGuard)
  @Roles({ roles: [roles.ADMIN, roles.DEFAULT_USER] })
  @ApiConsumes('multipart/form-data')
  createEvent(
    @UploadedFile() file: Express.Multer.File,
    @Body() createNationDto: CreateNationDto,
    @AuthenticatedUser() user: User,
  ) {
    const logo = file?.path;
    const params: CreateNationInput = {
      name: createNationDto.name,
      logo,
      userId: user.id.toString(),
    };
    return this.createNation
      .execute(params, createNationDto.nationEventId)
      .then(() => {
        return { message: 'Nation created successfully' };
      })
      .catch((error) => {
        return new HttpException(error.message, error.status);
      });
  }

  @Post('/add-participant')
  @UseGuards(KeycloakAuthGuard)
  @Roles({ roles: [roles.ADMIN, roles.DEFAULT_USER] })
  addParticipant(
    @Body() addParticipantOnNationDto: AddParticipantOnNationDto,
    @AuthenticatedUser() user: User,
  ) {
    return this.addParticipantOnNation
      .execute(
        addParticipantOnNationDto.nationEventId,
        addParticipantOnNationDto.nationId,
        addParticipantOnNationDto.participantToAdd,
        user,
      )
      .then(() => {
        return { message: 'Participant added successfully' };
      })
      .catch((error) => {
        return new HttpException(error.message, error.status);
      });
  }
}
