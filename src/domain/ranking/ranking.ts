import { Logo } from '../value-objects/logo';

export class Ranking {
  private id: number;
  private name: string;
  private participants: RankingParticipant[];
  constructor(ranking: RankingInput, participants: RankingParticipant[] = []) {
    this.id = ranking.id;
    this.name = ranking.name;
    this.participants = participants;
  }

  orderParticipants() {
    this.participants.sort((a, b) => b.points - a.points);
  }

  getParticipants() {
    return this.participants;
  }
}

export interface RankingParticipant {
  id: number;
  name: string;
  points: number;
  logo: Logo;
}

export type RankingInput = {
  id: number;
  name: string;
};
