import {
  Body,
  Controller,
  Post,
  UploadedFile,
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

@Controller('teams')
export class TeamsController {
  constructor(private readonly createTeam: CreateTeam) {}

  @Post('create-team')
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
    @AuthenticatedUser() user: any,
  ) {
    const logo = file?.path;
    const params: CreateTeamInput = { ...createTeamDto, logo, userId: user.id };
    return this.createTeam.execute(params).then(() => {
      return { message: 'Team created successfully' };
    });
  }
}
