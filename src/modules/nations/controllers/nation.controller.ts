import {
  Body,
  Controller,
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

@Controller('nations')
export class NationController {
  constructor(private readonly createNation: CreateNation) {}
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
      });
  }
}
