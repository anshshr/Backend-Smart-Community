import express, { urlencoded } from "express";
import router from "./routes.js";
import { pinoHttp } from "pino-http";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is running fine",
  });
});
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
