import { Injectable, OnModuleInit } from '@nestjs/common';
import KcAdminClient from '@keycloak/keycloak-admin-client';

@Injectable()
export class KeycloakAdminService implements OnModuleInit {
  private kcAdminClient: KcAdminClient;

  private dynamicKeycloakImport = async () =>
    new Function("return import('@keycloak/keycloak-admin-client')")();

  async onModuleInit() {
    const KCadmCli = (await this.dynamicKeycloakImport()).default;
    this.kcAdminClient = new KCadmCli({
      baseUrl: process.env.KEYCLOAK_SERVER_URL,
      realmName: 'master',
    });

    console.log(process.env.KEYCLOAK_ADMIN_USER);
    await this.kcAdminClient
      .auth({
        username: process.env.KEYCLOAK_ADMIN_USER,
        password: process.env.KEYCLOAK_ADMIN_PASSWORD,
        grantType: 'password',
        clientId: 'admin-cli',
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async getUserById(userId: string) {
    const user: any = await this.kcAdminClient.realmName;
    console.log(user);
    return user.length ? user[0] : user;
  }

  async getUsersByIds(ids: string[]) {
    const users = [];
    for (const userId of ids) {
      const user = await this.kcAdminClient.users.findOne({ id: userId });
      users.push(user);
    }
    return users;
  }
}
