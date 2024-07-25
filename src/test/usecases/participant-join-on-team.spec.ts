import { Participant } from 'src/domain/entities/participant/participant';
import { fakeTeam, fakeUser, mockTeamRepositoryFactory } from '../test-utils';

describe('Participant added by Team Owner', () => {
  it('Only Team Owner Can add a new participant on the team', async () => {
    // Arrange
    const mockUser = fakeUser();
    const isOwner = true;
    const participantOwner = new Participant(mockUser, isOwner);
    const newParticipant = fakeUser();

    const mockTeam = fakeTeam([participantOwner]);
    const teamRepository = mockTeamRepositoryFactory(mockTeam);

    const team = await teamRepository.findTeamById(mockTeam.id);

    console.log(team, team.getParticipants());

    team.addParticipant(newParticipant, mockUser);

    expect(team.getParticipants().length).toBe(2);
  });

  it('Should not add user when is not team owner', async () => {
    // Arrange
    await expect(async () => {
      const mockUser = fakeUser();
      const isOwner = true;
      const participantOwner = new Participant(mockUser, isOwner);
      const participantDefault = fakeUser();
      const newParticipant = fakeUser();

      const mockTeam = fakeTeam([
        participantOwner,
        new Participant(participantDefault, false),
      ]);
      const teamRepository = mockTeamRepositoryFactory(mockTeam);

      const team = await teamRepository.findTeamById(mockTeam.id);

      return team.addParticipant(newParticipant, participantDefault);
    }).rejects.toThrow();
  });
});
