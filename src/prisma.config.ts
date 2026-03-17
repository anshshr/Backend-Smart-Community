import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: "postgresql://neondb_owner:npg_NKY6tvPbwJ5Z@ep-noisy-wave-a1bhpajr-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=verify-full",
  },
});
