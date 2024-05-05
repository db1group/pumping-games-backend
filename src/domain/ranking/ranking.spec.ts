import { Logo } from '../value-objects/logo';
import { RankingParticipant, Ranking } from './ranking';

describe('Ranking', () => {
  describe('orderParticipants', () => {
    it('should order participants in descending order based on points', () => {
      const participants: RankingParticipant[] = [
        {
          id: 1,
          name: 'Participant 1',
          points: 10,
          logo: new Logo(Buffer.from('123')),
        },
        {
          id: 2,
          name: 'Participant 2',
          points: 20,
          logo: new Logo(Buffer.from('123')),
        },
        {
          id: 3,
          name: 'Participant 3',
          points: 15,
          logo: new Logo(Buffer.from('123')),
        },
      ];
      const ranking = new Ranking({ id: 1, name: 'Ranking 1' }, participants);
      ranking.orderParticipants();
      expect(ranking.getParticipants()[0].points).toBe(20);
      expect(ranking.getParticipants()[1].points).toBe(15);
      expect(ranking.getParticipants()[2].points).toBe(10);
    });
  });
});
