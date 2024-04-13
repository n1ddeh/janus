import "./modules";
import { AppController } from "./controllers/app.controller";
import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";

const app = new Elysia();
app.use(swagger());
app.use(AppController);

app.listen(3000);
