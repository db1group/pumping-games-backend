import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateEventDto } from '../DTO/create-event.dto';
import { CreateTeamEvent } from 'src/application/usecases/event/create-team-event';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';

@Controller('events')
export class EventsController {
  constructor(private readonly createTeamEvent: CreateTeamEvent) {}
  @Post('/create-team-event')
  @UseInterceptors(FileInterceptor('logo'))
  @ApiConsumes('multipart/form-data')
  createEvent(
    @UploadedFile() file: Express.Multer.File,
    @Body() createEventDto: CreateEventDto,
  ) {
    const logo = file?.path;
    const params = { ...createEventDto, logo };
    return this.createTeamEvent.execute(params).then(() => {
      return { message: 'Event created successfully' };
    });
  }
}
