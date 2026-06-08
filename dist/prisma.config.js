import { AppConfig } from "./config/config.js";
import "./config/env.js";
import { defineConfig } from "prisma/config";
const URL = AppConfig.DATABASE_URL;
export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
    },
    datasource: {
        url: URL || "",
    },
});
//# sourceMappingURL=prisma.config.js.map