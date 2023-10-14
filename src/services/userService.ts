import {User} from '../types/types';

export async function getUser(userId: string): Promise<User> {
  const response = await fetch(`http://10.0.2.2:3000/user/${userId}`);
  if (!response.ok) {
    throw new Error(response.status.toString());
  }
  const res = (await response.json()) as User;
  return res;
}

interface updateUserInfoParams {
  firstName: string;
  lastName: string;
  username: string;
}
export async function updateUserInfo(
  userId: string,
  params: updateUserInfoParams,
): Promise<void> {
  const fetchOptions = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    method: 'PATCH',
    body: JSON.stringify(params),
  };
  const response = await fetch(
    `http://10.0.2.2:3000/user/${userId}/updateInfo`,
    fetchOptions,
  );
  if (!response.ok) {
    throw new Error(response.status.toString());
  }
}
