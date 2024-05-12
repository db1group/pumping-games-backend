import { EvidenceName } from '../value-objects/evidence-name';
import { Id } from '../value-objects/id';
import { EvidenceType } from './evidence-type';
import { Evidence, EvidenceInput } from './evidence';

export class LeagueFormEvidence {
  readonly id: Id;
  private name: EvidenceName;
  private description: string;
  private evidences: Evidence[];

  constructor(evidenceFormInput: LeagueFormEvidenceInput) {
    this.id = new Id(evidenceFormInput.id);
    this.name = new EvidenceName(evidenceFormInput.name);
    this.evidences = [];
  }

  getName(): string {
    return this.name.getValue();
  }

  getDescription(): string {
    return this.description;
  }

  getEvidences(): Evidence[] {
    return this.evidences;
  }

  changeName(name: string) {
    this.name = new EvidenceName(name);
  }

  addEvidence(evidenceInput: EvidenceInput) {
    const evidence = new Evidence(evidenceInput);
    this.evidences.push(evidence);
  }

  approveEvidence(evidenceId: string) {
    const evidence = this.evidences.find(
      (evidence) => evidence.id.toString() === evidenceId,
    );
    if (!evidence) {
      throw new Error('Evidence not found');
    }
    evidence.approve();
  }

  rejectEvidence(evidenceId: string) {
    const evidence = this.evidences.find(
      (evidence) => evidence.id.toString() === evidenceId,
    );
    if (!evidence) {
      throw new Error('Evidence not found');
    }
    evidence.reject();
  }
}

export type LeagueFormEvidenceInput = {
  id: string;
  name: string;
  evidence: {
    type: EvidenceType;
    content: any;
  };
};
