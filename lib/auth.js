import { hash, compare} from 'bcryptjs';

export async function hashPassword(password) {
  const hashedPassword = await hash(password, 12); // salt for a count of 12, more salt more save, also take long time to run
  return hashedPassword;
}

/**
 * using the compare method provide by bcrypt, to check if the password string is match with the hashed one.
 * 
 * @param {*} password 
 * @param {*} hashedPassword 
 * @returns 
 */
export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}