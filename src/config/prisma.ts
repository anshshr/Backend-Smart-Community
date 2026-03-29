import "./env.js";
import { PrismaClient } from "../generated/prisma/client.js";

import { PrismaPg } from "@prisma/adapter-pg";
const URL = process.env.DATABASE_URL;

const adapter = new PrismaPg({
  connectionString: URL || "",
});

export const prisma = new PrismaClient({ adapter });
