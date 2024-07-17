export const DATABASE_CREDENTIALS = 'DATABASE_CREDENTIALS';
export interface DatabaseCredentials {
  load(): Promise<{
    readonly username: string;
    readonly password: string;
  }>;
}
