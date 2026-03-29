import "./config/env.js";
import { defineConfig } from "prisma/config";

const URL = process.env.DATABASE_URL;

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: URL || "",
  },
});
