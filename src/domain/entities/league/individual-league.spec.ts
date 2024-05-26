// import { IndividualLeague, IndividualLeagueInput } from './individual-league';
// import { NotEnoughTeamsError } from './errors/NotEnoughTeamsError';
// import { LeagueStatus } from './league-status';
// import { LeagueAlreadyFinishedError } from './errors/LeagueAlreadyFinishedError';
// import { LeagueAlreadyCancelledError } from './errors/LeagueAlreadyCancelledError';
// import { CannotAddTeamToInProgressLeagueError } from './errors/CannotAddTeamToInProgressLeagueError';
// import { ParticipantAlreadySubscribed } from './errors/ParticipantAlreadySubscribed';
// import { MaxParticipantsReachedError } from './errors/MaxParticipantsReachedError';
// import { User } from '../user/user';
// import { Participant } from '../participant/participant';
// import { EvidenceType } from './evidence-type';
// import { Id } from '../value-objects/id';
// import { generatePartipants } from '../../test/test-utils';

// function generateLeagueInput(): IndividualLeagueInput {
//   return {
//     name: 'Test League',
//     logo: Buffer.from('test_logo'),
//     season: 2022,
//     minParticipants: 2,
//     maxParticipants: 10,
//     formEvidence: {
//       id: new Id().toString(),
//       name: 'Test Form Evidence',
//       evidence: {
//         type: EvidenceType.TEXT,
//         content: 'Test value',
//       },
//     },
//   };
// }

// describe('IndividualLeague', () => {
//   let user1: User;
//   let user2: User;
//   let individualLeague: IndividualLeague;

//   beforeEach(() => {
//     user1 = generatePartipants(1)[0];
//     user2 = generatePartipants(1)[0];

//     const leagueInput: IndividualLeagueInput = generateLeagueInput();

//     individualLeague = new IndividualLeague(leagueInput);
//   });

//   it('should create an instance of IndividualLeague', () => {
//     expect(individualLeague).toBeInstanceOf(IndividualLeague);
//   });

//   it('should start the league', () => {
//     individualLeague.addParticipant(user1);
//     individualLeague.addParticipant(user2);
//     individualLeague.startLeague();
//     expect(individualLeague.getStatus()).toBe(LeagueStatus.IN_PROGRESS);
//   });

//   it('should throw NotEnoughTeamsError when starting the league with insufficient participants', () => {
//     expect(() => individualLeague.startLeague()).toThrow(NotEnoughTeamsError);
//   });

//   it('should add a participant to the league', () => {
//     individualLeague.addParticipant(user1);
//     expect(individualLeague.getParticipants()).toContainEqual(
//       new Participant(user1),
//     );
//   });

//   it('should throw LeagueAlreadyFinishedError when adding a participant to a finished league', () => {
//     individualLeague.addParticipant(user1);
//     individualLeague.addParticipant(user2);
//     individualLeague.startLeague();

//     individualLeague.finishLeague();
//     expect(() => individualLeague.addParticipant(user1)).toThrow(
//       LeagueAlreadyFinishedError,
//     );
//   });

//   it('should throw LeagueAlreadyCancelledError when adding a participant to a cancelled league', () => {
//     individualLeague.cancelLeague();

//     expect(() => individualLeague.addParticipant(user1)).toThrow(
//       LeagueAlreadyCancelledError,
//     );
//   });

//   it('should throw CannotAddTeamToInProgressLeagueError when adding a participant to an in-progress league', () => {
//     individualLeague.addParticipant(user1);
//     individualLeague.addParticipant(user2);
//     individualLeague.startLeague();

//     expect(() => individualLeague.addParticipant(user1)).toThrow(
//       CannotAddTeamToInProgressLeagueError,
//     );
//   });

//   it('should throw ParticipantAlreadySubscribed when adding an already subscribed participant', () => {
//     individualLeague.addParticipant(user1);
//     expect(() => individualLeague.addParticipant(user1)).toThrow(
//       ParticipantAlreadySubscribed,
//     );
//   });

//   it('should throw MaxParticipantsReachedError when adding a participant to a league with maximum participants reached', () => {
//     const participants = generatePartipants(10);

//     participants.forEach((participant) => {
//       individualLeague.addParticipant(participant);
//     });

//     expect(() =>
//       individualLeague.addParticipant(generatePartipants(1)[0]),
//     ).toThrow(MaxParticipantsReachedError);
//   });

//   it('should remove a participant from the league', () => {
//     const user1 = generatePartipants(1)[0];
//     const user2 = generatePartipants(1)[0];
//     individualLeague.addParticipant(user1);
//     individualLeague.addParticipant(user2);
//     individualLeague.removeParticipant(user1.id);
//     expect(individualLeague.getParticipants()).not.toContainEqual(
//       new Participant(user1),
//     );
//   });

//   it('should throw LeagueAlreadyFinishedError when removing a participant from a finished league', () => {
//     individualLeague.addParticipant(user1);
//     individualLeague.addParticipant(user2);
//     individualLeague.startLeague();
//     individualLeague.finishLeague();
//     const user = generatePartipants(1)[0];
//     expect(() => individualLeague.removeParticipant(user.id)).toThrow(
//       LeagueAlreadyFinishedError,
//     );
//   });

//   it('should throw LeagueAlreadyCancelledError when removing a participant from a cancelled league', () => {
//     individualLeague.cancelLeague();
//     const user = generatePartipants(1)[0];
//     expect(() => individualLeague.removeParticipant(user.id)).toThrow(
//       LeagueAlreadyCancelledError,
//     );
//   });

//   it('should throw CannotAddTeamToInProgressLeagueError when removing a participant from an in-progress league', () => {
//     individualLeague.addParticipant(user1);
//     individualLeague.addParticipant(user2);
//     individualLeague.startLeague();
//     const user = generatePartipants(1)[0];
//     expect(() => individualLeague.removeParticipant(user.id)).toThrow(
//       CannotAddTeamToInProgressLeagueError,
//     );
//   });
// });
