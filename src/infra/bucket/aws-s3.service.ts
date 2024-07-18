import { Injectable } from '@nestjs/common';
import { BucketService } from 'src/application/services/bucket.service';

@Injectable()
export class AwsS3Service implements BucketService {
  async uploadFile(localUrl: string): Promise<string> {
    return localUrl;
  }
}
