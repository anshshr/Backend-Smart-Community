import dotenv from "dotenv";

dotenv.config({
  path: ["../.env"],
});

if (!process.env.PORT) {
  throw new Error("PORT environment variable is not defined");
}

if (!process.env.ACCESS_TOKEN_SECRET) {
  throw new Error("ACCESS_TOKEN_SECRET environment variable is not defined");
}

if (!process.env.REFRESH_TOKEN_SECRET) {
  throw new Error("REFRESH_TOKEN_SECRET environment variable is not defined");
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not defined");
}

export const AppConfig = {
  PORT: process.env.PORT,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  DATABASE_URL: process.env.DATABASE_URL,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
};
