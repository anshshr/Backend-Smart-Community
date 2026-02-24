import bcrypt from "bcrypt";
export async function hashPassword(password) {
    const rounds = 10;
    const hashedPassword = await bcrypt.hash(password, rounds);
    return hashedPassword;
}
//# sourceMappingURL=password_hash.js.map