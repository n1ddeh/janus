declare module "bun" {
  // Add variables to .env file
  interface Env {
    SQL_HOST: string;
    SQL_PORT: number;
    SQL_DATABASE: string;
    SQL_USERNAME: string;
    SQL_PASSWORD: string;
    SQL_CERT_PATH: string;
  }
}
