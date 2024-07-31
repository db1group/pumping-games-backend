import {
  Body,
  Controller,
  HttpException,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateTeamDto } from '../DTO/create-team.dto';
import {
  CreateTeam,
  CreateTeamInput,
} from 'src/application/usecases/team/create-team';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { AuthenticatedUser, Roles } from 'nest-keycloak-connect';
import { roles } from 'src/infra/auth/roles';
import { KeycloakAuthGuard } from 'src/infra/auth/auth.guard';
import { User } from 'src/domain/entities/user/user';

@Controller('teams')
export class TeamsController {
  constructor(private readonly createTeam: CreateTeam) {}

  @Post('create-team')
  @UseGuards(KeycloakAuthGuard)
  @UseInterceptors(FileInterceptor('logo'))
  @ApiConsumes('multipart/form-data')
  @Roles({ roles: [roles.ADMIN] })
  @ApiBody({
    description: 'Cadastro do time',
    type: CreateTeamDto,
  })
  async createEvent(
    @UploadedFile() file: Express.Multer.File,
    @Body() createTeamDto: CreateTeamDto,
    @AuthenticatedUser() user: User,
  ) {
    const logo = file?.path;
    const params: CreateTeamInput = {
      ...createTeamDto,
      logo,
      userId: user.id.toString(),
    };
    return this.createTeam
      .execute(params)
      .then(() => {
        return { message: 'Team created successfully' };
      })
      .catch((error) => {
        return new HttpException(error.message, error.status);
      });
  }
}
