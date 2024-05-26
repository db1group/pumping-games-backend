// import { TeamLeague, TeamLeagueInput } from './team-league';
// import { LeagueStatus } from './league-status';
// import { EvidenceType } from './evidence-type';

// import { Id } from '../value-objects/id';
// import { generatePartipants } from '../../test/test-utils';
// import { TeamInput } from '../team/Team';

// function generateTeamInput(num: number): TeamInput[] {
//   return Array.from({ length: num }, (_, i) => {
//     const players = generatePartipants(2);
//     return {
//       id: new Id().toString(),
//       logo: Buffer.from('test_logo'),
//       name: `Team ${i + 1}`,
//       players,
//     };
//   });
// }

// function generateLeagueInput(): TeamLeagueInput {
//   return {
//     name: 'Test League',
//     logo: Buffer.from('test_logo'),
//     season: 2022,
//     maxTeams: 10,
//     minTeams: 2,
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
// describe('TeamLeague', () => {
//   let teamLeague: TeamLeague;
//   let teamLeagueInput: TeamLeagueInput;

//   beforeEach(() => {
//     teamLeagueInput = generateLeagueInput();
//     teamLeague = new TeamLeague(teamLeagueInput);
//   });

//   it('should create a new TeamLeague', () => {
//     expect(teamLeague).toBeDefined();
//   });

//   it('should start the league', () => {
//     teamLeague.addTeam(generateTeamInput(1)[0]);
//     teamLeague.addTeam(generateTeamInput(1)[0]);
//     teamLeague.addTeam(generateTeamInput(1)[0]);
//     teamLeague.startLeague();
//     expect(teamLeague.getStatus()).toBe(LeagueStatus.IN_PROGRESS);
//   });

//   it('should throw error when starting league with not enough teams', () => {
//     expect(() => teamLeague.startLeague()).toThrow('Not enough teams');
//   });

//   it('should add a team', () => {
//     const team = generateTeamInput(1)[0];
//     teamLeague.addTeam(team);
//     expect(teamLeague.getLeague().teams.length).toBe(1);
//   });

//   it('should throw error when adding a team to a finished league', () => {
//     teamLeague.addTeam(generateTeamInput(1)[0]);
//     teamLeague.addTeam(generateTeamInput(1)[0]);
//     teamLeague.addTeam(generateTeamInput(1)[0]);
//     teamLeague.startLeague();
//     teamLeague.finishLeague();
//     const team = generateTeamInput(1)[0];
//     expect(() => teamLeague.addTeam(team)).toThrow(
//       'Cannot add a team to a finished league',
//     );
//   });

//   it('should remove a team', () => {
//     const team = generateTeamInput(1)[0];
//     teamLeague.addTeam(team);
//     teamLeague.removeTeam(team.id);
//     expect(teamLeague.getLeague().teams.length).toBe(0);
//   });

//   it('should change the league name', () => {
//     teamLeague.changeName('New League Name');
//     expect(teamLeague.getLeague().name).toBe('New League Name');
//   });

//   it('should throw error when changing the name of a finished league', () => {
//     teamLeague.addTeam(generateTeamInput(1)[0]);
//     teamLeague.addTeam(generateTeamInput(1)[0]);
//     teamLeague.addTeam(generateTeamInput(1)[0]);
//     teamLeague.startLeague();
//     teamLeague.finishLeague();
//     expect(() => teamLeague.changeName('New League Name')).toThrow(
//       'Cannot change the name of a league that is finished',
//     );
//   });

//   it('should cancel the league', () => {
//     teamLeague.cancelLeague();
//     expect(teamLeague.getStatus()).toBe(LeagueStatus.CANCELLED);
//   });

//   it('should throw error when cancelling a finished league', () => {
//     teamLeague.addTeam(generateTeamInput(1)[0]);
//     teamLeague.addTeam(generateTeamInput(1)[0]);
//     teamLeague.addTeam(generateTeamInput(1)[0]);
//     teamLeague.startLeague();
//     teamLeague.finishLeague();
//     expect(() => teamLeague.cancelLeague()).toThrow(
//       'Cannot cancel a finished league',
//     );
//   });

//   it('should finish the league', () => {
//     teamLeague.addTeam(generateTeamInput(1)[0]);
//     teamLeague.addTeam(generateTeamInput(1)[0]);
//     teamLeague.addTeam(generateTeamInput(1)[0]);
//     teamLeague.startLeague();
//     teamLeague.finishLeague();
//     expect(teamLeague.getStatus()).toBe(LeagueStatus.FINISHED);
//   });

//   it('should throw error when finishing a not in progress league', () => {
//     expect(() => teamLeague.finishLeague()).toThrow(
//       'Cannot finish a league that is not in progres',
//     );
//   });
// });
