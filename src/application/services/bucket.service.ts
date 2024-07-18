export const BUCKET_SERVICE = 'BUCKET_SERVICE';
export interface BucketService {
  uploadFile(localUrl: string): Promise<string>;
}
