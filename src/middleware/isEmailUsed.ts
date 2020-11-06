import { User } from "../entities/User";

export async function isEmailUsed(email: string): Promise<boolean> {
    const user = await User.findOne({ where: email });
    if (user) return false;
    return true;
}
