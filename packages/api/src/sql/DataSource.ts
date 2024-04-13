import { DataSource } from "typeorm";
import fs from "fs/promises";

class SQLDataAccess {
  private dataSource: DataSource | undefined;
  private cert: string | undefined;

  public connectToCloudSql = async (): Promise<DataSource> => {
    if (this.dataSource) return this.dataSource;
    const cert = await this.getCert();
    const ds = new DataSource({
      type: "postgres",
      host: process.env["SQL_HOST"],
      port: process.env["SQL_PORT"],
      database: process.env["SQL_DATABASE"],
      username: process.env["SQL_USERNAME"],
      password: process.env["SQL_PASSWORD"],
      ssl: {
        ca: cert,
      },
    });
    await ds.initialize();
    this.dataSource = ds;
    return ds;
  };

  private getCert = async (): Promise<string> => {
    if (this.cert) return this.cert;
    const certPath = process.env["SQL_CERT_PATH"];
    this.cert = await fs.readFile(certPath, "utf8");
    return this.cert;
  };
}

const dataAccess = new SQLDataAccess();
const cloudSqlConnection = await dataAccess.connectToCloudSql();

export { cloudSqlConnection };
