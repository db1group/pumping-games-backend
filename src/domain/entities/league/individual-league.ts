import { LeagueFormEvidenceInput } from './league-form-evidence';
import { League, LeagueInput, LeagueOutput } from './league';
import { NotEnoughTeamsError } from './errors/NotEnoughTeamsError';
import { User } from '../user/user';
import { LeagueStatus } from './league-status';
import { Participant } from '../participant/participant';
import { LeagueAlreadyFinishedError } from './errors/LeagueAlreadyFinishedError';
import { LeagueAlreadyCancelledError } from './errors/LeagueAlreadyCancelledError';
import { CannotAddTeamToInProgressLeagueError } from './errors/CannotAddTeamToInProgressLeagueError';
import { ParticipantAlreadySubscribed } from './errors/ParticipantAlreadySubscribed';
import { MaxParticipantsReachedError } from './errors/MaxParticipantsReachedError';
import { LeagueMaxTeams } from '../../value-objects/league-max-teams';
import { LeagueMinTeams } from '../../value-objects/league-min-teams';

export class IndividualLeague extends League {
  private participants: Participant[];
  private minParticipants: LeagueMinTeams;
  private maxParticipants: LeagueMaxTeams;

  constructor(league: IndividualLeagueInput) {
    super(league);
    this.minParticipants = new LeagueMinTeams(league.minParticipants);
    this.maxParticipants = new LeagueMaxTeams(league.maxParticipants);
    this.participants = [];
  }

  getLeague(): IndividualLeagueOutput {
    return {
      name: this.name.getValue(),
      logo: this.logo.getValue(),
      season: this.season.getValue(),
      status: this.status,
      participants: this.participants,
    };
  }

  startLeague() {
    if (this.participants.length < this.minParticipants.getValue()) {
      throw new NotEnoughTeamsError();
    }
    this.status = LeagueStatus.IN_PROGRESS;
  }

  addParticipant(user: User) {
    if (this.status === LeagueStatus.FINISHED) {
      throw new LeagueAlreadyFinishedError();
    }
    if (this.status === LeagueStatus.CANCELLED) {
      throw new LeagueAlreadyCancelledError();
    }
    if (this.status === LeagueStatus.IN_PROGRESS) {
      throw new CannotAddTeamToInProgressLeagueError();
    }
    if (this.participants.some((item) => item.id === user.id.toString())) {
      throw new ParticipantAlreadySubscribed();
    }
    if (this.participants.length >= this.maxParticipants.getValue()) {
      throw new MaxParticipantsReachedError();
    }

    this.participants.push(new Participant(user));
  }

  removeParticipant(participantId: string) {
    if (this.status === LeagueStatus.FINISHED) {
      throw new LeagueAlreadyFinishedError();
    }
    if (this.status === LeagueStatus.CANCELLED) {
      throw new LeagueAlreadyCancelledError();
    }
    if (this.status === LeagueStatus.IN_PROGRESS) {
      throw new CannotAddTeamToInProgressLeagueError();
    }

    this.participants = this.participants.filter(
      (participant) => participant.id !== participantId,
    );
  }

  getParticipants(): Participant[] {
    return this.participants;
  }
}

export interface IndividualLeagueInput extends LeagueInput {
  name: string;
  logo: string;
  season: number;
  minParticipants: number;
  maxParticipants: number;
  formEvidence: LeagueFormEvidenceInput;
}

export interface IndividualLeagueOutput extends LeagueOutput {
  participants: Participant[];
}
