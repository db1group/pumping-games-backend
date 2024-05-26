// import {
//   LeagueFormEvidence,
//   LeagueFormEvidenceInput,
// } from './league-form-evidence';
// import { EvidenceType } from './evidence-type';
// import { EvidenceInput } from './evidence';
// import { Id } from '../value-objects/id';

// describe('LeagueFormEvidence', () => {
//   let leagueFormEvidence: LeagueFormEvidence;

//   beforeEach(() => {
//     const evidenceFormInput: LeagueFormEvidenceInput = {
//       id: new Id().toString(),
//       name: 'Test Evidence',
//       evidence: {
//         type: EvidenceType.TEXT,
//         content: 'Test Content',
//       },
//     };
//     leagueFormEvidence = new LeagueFormEvidence(evidenceFormInput);
//   });

//   it('should get the name', () => {
//     expect(leagueFormEvidence.getName()).toBe('Test Evidence');
//   });

//   it('should get the description', () => {
//     expect(leagueFormEvidence.getDescription()).toBeUndefined();
//   });

//   it('should change the name', () => {
//     leagueFormEvidence.changeName('New Name');
//     expect(leagueFormEvidence.getName()).toBe('New Name');
//   });

//   it('should add an evidence', () => {
//     const evidenceInput: EvidenceInput = {
//       type: EvidenceType.TEXT,
//       leagueId: new Id(),
//       teamId: new Id(),
//       userId: new Id(),
//       content: 'Test Content',
//     };
//     leagueFormEvidence.addEvidence(evidenceInput);
//     expect(leagueFormEvidence.getEvidences().length).toBe(1);
//   });

//   it('should approve an evidence', () => {
//     const evidenceInput: EvidenceInput = {
//       type: EvidenceType.TEXT,
//       leagueId: new Id(),
//       teamId: new Id(),
//       userId: new Id(),
//       content: 'Test Content',
//     };
//     leagueFormEvidence.addEvidence(evidenceInput);
//     const evidenceId = leagueFormEvidence.getEvidences()[0].id.toString();
//     leagueFormEvidence.approveEvidence(evidenceId);
//     expect(leagueFormEvidence.getEvidences()[0].getStatus()).toBe('APPROVED');
//   });

//   it('should reject an evidence', () => {
//     const evidenceInput: EvidenceInput = {
//       type: EvidenceType.TEXT,
//       leagueId: new Id(),
//       teamId: new Id(),
//       userId: new Id(),
//       content: 'Test Content',
//     };
//     leagueFormEvidence.addEvidence(evidenceInput);
//     const evidenceId = leagueFormEvidence.getEvidences()[0].id.toString();
//     leagueFormEvidence.rejectEvidence(evidenceId);
//     expect(leagueFormEvidence.getEvidences()[0].getStatus()).toBe('REJECTED');
//   });
// });
