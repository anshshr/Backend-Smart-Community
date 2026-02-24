import bcrypt from "bcrypt";
export async function hashPassword(password: string): Promise<string> {
  const rounds = 10;
  const hashedPassword = await bcrypt.hash(password, rounds);

  return hashedPassword;
}
