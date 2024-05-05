import { Team, TeamInput } from '../teams/team';
import { User } from '../user/user';
import { Id } from '../value-objects/id';
import { EvidenceType } from './evidence-type';
import { League, LeagueInput } from './league';
import { LeagueStatus } from './league-status';

describe('League', () => {
  let player: User;
  let team1: Team;
  let team2: Team;
  let leagueInput: LeagueInput;
  beforeEach(() => {
    player = new User({
      avatar: Buffer.from('avatar'),
      email: 'asdasd@asdasd.com',
      id: '1',
      name: 'John Doe',
      roles: ['default'],
    });

    team1 = new Team({
      logo: Buffer.from('logo'),
      name: 'Chelsea',
      players: [player],
    });

    team2 = new Team({
      logo: Buffer.from('logo'),
      name: 'Arsenal',
      players: [player],
    });

    leagueInput = {
      name: 'Premier League',
      logo: Buffer.from('logo'),
      season: 2021,
      teams: [team1, team2],
      maxTeams: 20,
      minTeams: 2,
      formEvidence: {
        id: new Id().toString(),
        name: 'Evidence name',
        evidence: {
          type: EvidenceType.TEXT,
          content: 'Evidence content',
        },
      },
    };
  });

  it('should start the league', () => {
    const league = new League(leagueInput);
    league.startLeague();
    expect(league.getLeague().status).toEqual(LeagueStatus.IN_PROGRESS);
  });

  it('should add a team to the league', () => {
    const league = new League(leagueInput);
    const newTeam: TeamInput = {
      id: new Id().toString(),
      logo: Buffer.from('logo'),
      name: 'Manchester United',
      players: [player],
    };
    league.addTeam(newTeam);
    const lastTeam =
      league.getLeague().teams[league.getLeague().teams.length - 1];
    expect(lastTeam.id).toContain(newTeam.id);
  });

  it('should remove a team from the league', () => {
    const league = new League(leagueInput);
    league.removeTeam(team1.id);
    expect(league.getLeague().teams).not.toContain(team1);
  });

  it('should add a logo to the league', () => {
    const league = new League(leagueInput);
    const newLogo = Buffer.from('new logo');
    league.addLogo(newLogo);
    expect(league.getLeague().logo).toEqual(newLogo);
  });

  it('should remove a logo from the league', () => {
    const league = new League(leagueInput);
    league.removeLogo();
    expect(!!league.getLeague().logo).toBeFalsy();
  });

  it('should set a season for the league', () => {
    const league = new League(leagueInput);
    const newSeason = 2022;
    league.setSeason(newSeason);
    expect(league.getLeague().season).toEqual(newSeason);
  });

  it('should change the name of the league', () => {
    const league = new League(leagueInput);
    const newName = 'Champions League';
    league.changeName(newName);
    expect(league.getLeague().name).toEqual(newName);
  });

  it('should cancel the league', () => {
    const league = new League(leagueInput);
    league.cancelLeague();
    expect(league.getLeague().status).toEqual(LeagueStatus.CANCELLED);
  });

  it('should get the league', () => {
    const league = new League(leagueInput);
    const leagueOutput = league.getLeague();
    expect(leagueOutput).toEqual({
      name: 'Premier League',
      logo: Buffer.from('logo'),
      season: 2021,
      teams: [team1, team2],
      status: LeagueStatus.ACTIVE,
    });
  });

  it('should throw an error when finishing a league that is not active', () => {
    const league = new League(leagueInput);
    league.startLeague();
    league.finishLeague();
    expect(() => league.finishLeague()).toThrow(
      'Cannot finish a league that is not in progress',
    );
  });

  it('should finish the league', () => {
    const league = new League(leagueInput);
    league.startLeague();
    league.finishLeague();
    expect(league.getLeague().status).toEqual(LeagueStatus.FINISHED);
  });

  it('should throw an error when finishing a league that is not in progress', () => {
    const league = new League(leagueInput);
    expect(() => league.finishLeague()).toThrow(
      'Cannot finish a league that is not in progress',
    );
  });
});
