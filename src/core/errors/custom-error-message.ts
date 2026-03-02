import { ZodError } from "zod";
import { prismaErrorMessage } from "./prisma-error-message.js";
import { ZodErrorMessage } from "./zod-error-message.js";

export function customErrorMessgae(error: any): string {
  if (error instanceof ZodError) return ZodErrorMessage(error);
  else return prismaErrorMessage(error);
}
