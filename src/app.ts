import express, { urlencoded } from "express";
import router from "./routes.js";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.get("/health", (req, res) => {
  res.send("healthy");
});

app.use("/api/v1", router);

export default app;
