import Elysia from "elysia";

const genPath = (basePath: string, path?: string): string => {
  if (path) {
    return basePath + path;
  }
  return basePath;
};

export const AppController = (app: Elysia) => {
  const basePath = "/";

  app.get(genPath(basePath), () => {
    return "Server is running";
  });

  return Promise.resolve(app);
};
