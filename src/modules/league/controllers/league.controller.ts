import {
  Body,
  Controller,
  HttpException,
  Post,
  UseGuards,
} from '@nestjs/common';
import { roles } from 'src/infra/auth/roles';
import { KeycloakAuthGuard } from 'src/infra/auth/auth.guard';
import {
  CreateTeamLeague,
  CreateTeamLeagueDTO,
} from 'src/application/usecases/league/create-team-league';
import { Roles } from 'nest-keycloak-connect';

@Controller('league')
export class LeagueController {
  constructor(private readonly createTeamLeague: CreateTeamLeague) {}
  @Post('/create-team-league')
  @UseGuards(KeycloakAuthGuard)
  @Roles({ roles: [roles.ADMIN, roles.DEFAULT_USER] })
  createEvent(@Body() createTeamLeagueDTO: CreateTeamLeagueDTO) {
    return this.createTeamLeague
      .execute(createTeamLeagueDTO)
      .then(() => {
        return { message: 'League created successfully' };
      })
      .catch((error) => {
        return new HttpException(error.message, error.status);
      });
  }
}
