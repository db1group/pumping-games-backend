import { Connection } from 'src/infra/database/database-connection';
import { TeamLeagueInput } from 'src/domain/entities/league/team-league';
import { TeamInput } from 'src/domain/entities/team/Team';
import { Participant } from 'src/domain/entities/participant/participant';
import { ParticipantDatabaseModel } from '../team/team.repository.postgres';
import { User } from 'src/domain/entities/user/user';
import {
  NationEvent,
  NationEventInput,
} from 'src/domain/entities/event/nation-event';

export class NationEventRestoreBuilder {
  private nationEvent: NationEventInput;
  constructor(private readonly connection: Connection) {}

  private async addInformationOfNationEvent(nationEventId: string) {
    const nationEventModel = await this.connection('nation_events')
      .where({ id: nationEventId })
      .first();
    this.nationEvent = {
      id: nationEventModel.id,
      name: nationEventModel.name,
      status: nationEventModel.status,
      logo: nationEventModel.logo,
      season: nationEventModel.season,
      leagues: [],
      nations: [],
    };
  }

  private async addLeaguesOfNationEvent(nationEventId: string) {
    const leaguesIds = await this.connection('nation_events_has_team_leagues')
      .where({ nation_event_id: nationEventId })
      .select('*');

    const leaguesModel = await this.connection('team_leagues').whereIn(
      'id',
      leaguesIds.map((league) => league.team_league_id),
    );

    this.nationEvent.leagues = leaguesModel.map((league) => {
      const teamLeagueInput: TeamLeagueInput = {
        id: league.id,
        name: league.name,
        minTeams: league.min_teams,
        maxTeams: league.max_teams,
        logo: league.logo,
        season: league.season,
      };
      return teamLeagueInput;
    });
  }

  private async addNationsOnNationEvent(nationEventId: string) {
    const nationIds = await this.connection('nation_events_has_nations')
      .where({ nation_event_id: nationEventId })
      .select('*');

    const nationsModel = await this.connection('nations').whereIn(
      'id',
      nationIds.map((nation) => nation.nation_id),
    );

    this.nationEvent.nations = await Promise.all(
      nationsModel.map(async (nation) => {
        const participants = await this.addParticipantsOnNations(nation.id);
        const teamInput: TeamInput = {
          id: nation.id,
          name: nation.name,
          logo: nation.logo,
          status: nation.status,
          players: participants,
        };
        return teamInput;
      }),
    );
  }

  private async addParticipantsOnNations(
    nationId: string,
  ): Promise<Participant[]> {
    const participantsIds = await this.connection(
      'nations_has_participants',
    ).where({ nation_id: nationId });

    const participantsModel = await this.connection('participants').whereIn(
      'id',
      participantsIds.map((participant) => participant.participant_id),
    );

    const participants = participantsModel.map(
      async (participant: ParticipantDatabaseModel) => {
        const userModel = await this.connection('users')
          .where({ id: participant.user_id })
          .first();

        const user = User.restoreFromDatabase(userModel);

        return Participant.restoreFromDatabase({
          user,
          id: participant.id,
          owner: participant.owner,
        });
      },
    );

    return Promise.all(participants);
  }

  async build(nationEventId: string) {
    await Promise.all([
      this.addInformationOfNationEvent(nationEventId),
      this.addLeaguesOfNationEvent(nationEventId),
      this.addNationsOnNationEvent(nationEventId),
    ]);
    return new NationEvent(this.nationEvent);
  }
}
