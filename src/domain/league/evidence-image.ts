import { IEvidence } from './evidence';

export class EvidenceImage implements IEvidence {
  constructor(private readonly image: Buffer) {}
  getContent(): string {
    return this.image.toString();
  }
}
