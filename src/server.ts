import dotenv from "dotenv";
import app from "./app.js";
import { dot } from "node:test/reporters";
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is runing in the Port ${PORT}`);
});
