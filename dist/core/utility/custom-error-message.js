import { ZodError } from "zod";
import { ZodErrorMessage } from "./zod-error-message.js";
import { prismaErrorMessage } from "./prisma-error-message.js";
export function customErrorMessgae(error) {
    console.log(typeof error);
    if (error instanceof ZodError)
        return ZodErrorMessage(error);
    return prismaErrorMessage(error);
}
//# sourceMappingURL=custom-error-message.js.map