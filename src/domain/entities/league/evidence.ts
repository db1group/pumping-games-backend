import { EvidenceType } from './evidence-type';
import { EvidenceImage } from './evidence-image';
import { EvidenceText } from './evidence-text';
import { EvidenceStatus } from './evidence-status';
import { Id } from '../../value-objects/id';

export class Evidence {
  readonly id: Id;
  private type: EvidenceType;
  private status: EvidenceStatus;
  private content: IEvidence;
  readonly teamId: Id;
  readonly leagueId: Id;
  readonly userId: Id;

  constructor(evidenceInput: EvidenceInput) {
    this.id = new Id();
    this.content = this.createContent(
      evidenceInput.type,
      evidenceInput.content,
    );
    this.type = evidenceInput.type;
    this.status = EvidenceStatus.PENDING;
    this.teamId = evidenceInput.teamId;
    this.leagueId = evidenceInput.leagueId;
    this.userId = evidenceInput.userId;
  }

  getType(): EvidenceType {
    return this.type;
  }

  getStatus(): EvidenceStatus {
    return this.status;
  }

  getContent(): string {
    return this.content.getContent();
  }

  approve() {
    this.status = EvidenceStatus.APPROVED;
  }

  reject() {
    this.status = EvidenceStatus.REJECTED;
  }

  private createContent(type: EvidenceType, content: any): IEvidence {
    switch (type) {
      case EvidenceType.TEXT:
        return new EvidenceText(content);
      case EvidenceType.IMAGE:
        return new EvidenceImage(content);
      default:
        throw new Error('Invalid evidence type');
    }
  }
}

export type EvidenceInput = {
  type: EvidenceType;
  content: any;
  teamId: Id;
  leagueId: Id;
  userId: Id;
};

export interface IEvidence {
  getContent(): string;
}
