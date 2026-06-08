import express, { urlencoded } from "express";
import router from "./routes.js";
import { pinoHttp } from "pino-http";
import { httpRequestCounter, register } from "./config/prometheus.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "https://id-preview-419d383d--c58a3479-bbaa-4f5b-b8d2-1dadcdd46491.lovable.app",
    ], // Allow requests with credentials (cookies, authorization headers, etc.)
    credentials: true, // Allow cookies to be sent in cross-origin requests
  }),
);

// monitoring the endpoints
app.use((req, res, next) => {
  res.on("finish", () => {
    httpRequestCounter.inc({
      method: req.method,
      route: req.route?.path || req.url,
      status: res.statusCode,
    });
  });
  next();
});

// default endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is running fine",
  });
});

//  to check that the server is runing fine or not
app.get("/health", (req, res) => {
  res.send("healthy");
});

// to check the metrics
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  const metrics = await register.metrics();
  res.send(metrics);
});

app.use("/api/v1", router);

export default app;
