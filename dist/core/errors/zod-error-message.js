import { ZodError } from "zod";
export function ZodErrorMessage(error) {
    return JSON.parse(error)[0].message;
}
//# sourceMappingURL=zod-error-message.js.map