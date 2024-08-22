import {
  Transaction,
  Connection,
} from 'src/infra/database/database-connection';

import { NationEvent } from 'src/domain/entities/event/nation-event';
import { NationDatabaseModel } from '../nation/nation.repository.postgres';
import { TeamLeagueDatabaseModel } from '../league/team-league.repository.postgres';
import { Participant } from 'src/domain/entities/participant/participant';
import { ParticipantDatabaseModel } from '../team/team.repository.postgres';

export class NationEventUpdateBuilder {
  constructor(
    private readonly connection: Connection,
    private readonly transaction: Transaction,
  ) {}

  private createNationEventModel(nationEvent: NationEvent) {
    return {
      id: nationEvent.id,
      name: nationEvent.getName(),
      status: nationEvent.getStatus(),
      logo_url: nationEvent.logo.getValue(),
      season: nationEvent.season.getValue().toString(),
    };
  }

  private async updateNationEvent(nationEvent: NationEvent) {
    const nationEventModel = this.createNationEventModel(nationEvent);
    await this.transaction('nation_events')
      .where({ id: nationEvent.id })
      .update(nationEventModel);
  }

  private async updateNations(nationEvent: NationEvent) {
    const nationDatabaseModel: NationDatabaseModel[] = nationEvent.nations.map(
      (nation) => ({
        id: nation.id,
        name: nation.name.getValue(),
        logo_url: nation.logo.getValue(),
        status: nation.getStatus().toString(),
      }),
    );

    nationDatabaseModel.forEach(async (nation) => {
      await this.transaction('nations').where({ id: nation.id }).update(nation);
    });

    await this.transaction('nation_events_has_nations')
      .where({
        nation_event_id: nationEvent.id,
      })
      .del();

    await this.transaction('nation_events_has_nations').insert(
      nationEvent.nations.map((nation) => ({
        nation_event_id: nationEvent.id,
        nation_id: nation.id,
      })),
    );
  }

  private async updateLeagues(nationEvent: NationEvent) {
    const leaguesDataModel: TeamLeagueDatabaseModel[] = nationEvent.leagues.map(
      (league) => ({
        id: league.id,
        name: league.getName(),
        logo_url: league.getLogo(),
        season: league.getSeason(),
        status: league.getStatus(),
        min_teams: league.getMinTeams(),
        max_teams: league.getMaxTeams(),
      }),
    );

    leaguesDataModel.forEach(async (league) => {
      await this.transaction('team_leagues')
        .where({ id: league.id })
        .update(league);
    });

    await this.transaction('nation_events_has_team_leagues')
      .where({ nation_event_id: nationEvent.id })
      .del();

    await this.transaction('nation_events_has_team_leagues').insert(
      nationEvent.leagues.map((league) => ({
        nation_event_id: nationEvent.id,
        team_league_id: league.id,
      })),
    );
  }

  private async createParticipantIfNotExists(participants: Participant[]) {
    const participantsDataModel: ParticipantDatabaseModel[] = await Promise.all(
      participants.map(async (participant) => {
        const user = await this.transaction('users')
          .where({ email: participant.email.getValue() })
          .first();
        return {
          id: participant.id,
          name: participant.name.getValue(),
          email: participant.email.getValue(),
          owner: participant.owner,
          user_id: user.id,
        };
      }),
    );

    for (const participant of participantsDataModel) {
      const participantExists = await this.transaction('participants')
        .where({
          email: participant.email,
        })
        .first();

      if (!participantExists) {
        await this.transaction('participants').insert(participant);
      }
    }
  }

  private async updateNationParticipants(nationEvent: NationEvent) {
    for (const nation of nationEvent.nations) {
      await this.transaction('nations_has_participants')
        .where({ nation_id: nation.id })
        .del();

      await this.createParticipantIfNotExists(nation.participants);

      const participantsData = nation.participants.map((participant) => ({
        nation_id: nation.id,
        participant_id: participant.id,
      }));

      await this.transaction('nations_has_participants').insert(
        participantsData,
      );
    }
  }

  async build(nationEvent: NationEvent) {
    try {
      await this.updateNationEvent(nationEvent);
      await this.updateNations(nationEvent);
      await this.updateLeagues(nationEvent);
      await this.updateNationParticipants(nationEvent);
      this.transaction.commit();
    } catch (error) {
      this.transaction.rollback();
      console.log(error);
      throw error;
    }
  }
}
