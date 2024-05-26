import { IEvidence } from './evidence';

export class EvidenceText implements IEvidence {
  constructor(private text: string) {}

  getContent(): string {
    return this.text;
  }
}
