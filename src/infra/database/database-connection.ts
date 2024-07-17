export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';
export interface DatabaseConnection {
  connect(): Promise<any>;
  close(): Promise<void>;
}
