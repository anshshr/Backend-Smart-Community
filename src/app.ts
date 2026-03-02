import express, { urlencoded } from "express";
import router from "./routes.js";
import { pinoHttp } from "pino-http";
import type { ResponseInterface } from "./core/interfaces/response_interface.js";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.get("/health", (req, res) => {
  res.send("healthy");
});
app.use(
  pinoHttp({
    level: "silent",
  }),
);

app.use("/api/v1", router);

export default app;
