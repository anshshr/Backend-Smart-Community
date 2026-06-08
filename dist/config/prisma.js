import "./env.js";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { AppConfig } from "./config.js";
const URL = AppConfig.DATABASE_URL;
const adapter = new PrismaPg({
    connectionString: URL || "",
});
export const prisma = new PrismaClient({ adapter });
//# sourceMappingURL=prisma.js.map