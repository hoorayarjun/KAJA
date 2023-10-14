import {User} from '../types/types';

export async function getUser(userId: number): Promise<User> {
  const response = await fetch(`http://10.0.2.2:3000/user/${userId}`);
  if (!response.ok) {
    throw new Error(response.status.toString());
  }
  const res = (await response.json()) as User;
  return res;
}
