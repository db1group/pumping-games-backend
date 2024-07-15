import { faker } from '@faker-js/faker';
import { Id } from '../domain/value-objects/id';
import { User } from '../domain/entities/user/user';
import { UserRepository } from 'src/application/repositories/user.repository';
import { TeamRepository } from 'src/application/repositories/team.repository';
import { Team } from 'src/domain/entities/team/Team';
import { Participant } from 'src/domain/entities/participant/participant';
import Queue from 'src/infra/queue/queue';
import { IndividualLeagueInput } from 'src/domain/entities/league/individual-league';
import { EvidenceType } from 'src/domain/entities/league/evidence-type';

export function generatePartipants(num: number): User[] {
  return Array.from({ length: num }, (_, i) => {
    return new User({
      id: new Id().toString(),
      name: `User ${i + 1}`,
      email: `user${i}@asdasd.com`,
      avatar: 'avatarpath',
      roles: ['player'],
    });
  });
}

export function fakeUser(roles?: string[]): User {
  return new User({
    id: new Id().toString(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: 'avatarpath',
    roles: roles ?? ['player'],
  });
}

export function fakeTeam(participants?: Participant[]): Team {
  return new Team({
    id: new Id().toString(),
    name: faker.person.fullName(),
    logo: 'logourl',
    players: participants,
  });
}

export function mockUserRepositoryFactory(user?: User): UserRepository {
  return {
    createUser: jest.fn(),
    findUserById: async () => user,
    getListOfUsers: async () => [user],
  };
}

export function mockTeamRepositoryFactory(team?: Team): TeamRepository {
  return {
    createTeam: jest.fn(),
    updateTeam: jest.fn(),
    findTeamById: async () => {
      return team ?? fakeTeam();
    },
  };
}

export function mockQueueFactoryQueue(): Queue {
  return {
    publish: jest.fn(),
    consume: jest.fn(),
    connect: jest.fn(),
  };
}

export function fakeIndividualLeague(): IndividualLeagueInput {
  return {
    name: 'Test League',
    logo: 'Test Logo',
    season: 2022,
    formEvidence: {
      id: new Id().toString(),
      name: 'Test Evidence',
      evidence: {
        type: EvidenceType.IMAGE,
        content: 'Test Content',
      },
    },
    minParticipants: 10,
    maxParticipants: 20,
  };
}
