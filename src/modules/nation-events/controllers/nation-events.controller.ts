import {
  Body,
  Controller,
  HttpException,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateEventDto } from '../DTO/create-event.dto';
import { CreateNationEvent } from 'src/application/usecases/nation-event/create-nation-event';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { Roles } from 'nest-keycloak-connect';
import { roles } from 'src/infra/auth/roles';
import { KeycloakAuthGuard } from 'src/infra/auth/auth.guard';

@Controller('events')
export class NationEventsController {
  constructor(private readonly createNationEvent: CreateNationEvent) {}
  @Post('/create-nation-event')
  @UseGuards(KeycloakAuthGuard)
  @UseInterceptors(FileInterceptor('logo'))
  @Roles({ roles: [roles.ADMIN, roles.DEFAULT_USER] })
  @ApiConsumes('multipart/form-data')
  createEvent(
    @UploadedFile() file: Express.Multer.File,
    @Body() createEventDto: CreateEventDto,
  ) {
    const logo = file?.path;
    const params = { ...createEventDto, logo };
    return this.createNationEvent
      .execute(params)
      .then(() => {
        return { message: 'Event created successfully' };
      })
      .catch((error) => {
        return new HttpException(error.message, error.status);
      });
  }
}
