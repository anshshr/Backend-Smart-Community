import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = resolve(__dirname, "../src/generated/prisma");
const targetDir = resolve(__dirname, "../dist/generated/prisma");

try {
  await rm(targetDir, { recursive: true, force: true });
  await mkdir(resolve(__dirname, "../dist/generated"), { recursive: true });
  await cp(sourceDir, targetDir, { recursive: true });
  console.log("Copied Prisma generated files to dist/generated/prisma");
} catch (error) {
  console.error("Failed to copy Prisma generated files:", error);
  process.exit(1);
}
