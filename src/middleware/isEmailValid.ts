const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export function isEmailValid(email: string): boolean {
    if (regex.test(email)) return true;
    return false;
}
