import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '../types/types';

export async function setUser_storage(user: User): Promise<void> {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    throw new Error('Cannot save user info');
  }
}

export async function getUser_storage(): Promise<User> {
  try {
    const jsonValue = await AsyncStorage.getItem('user');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    throw new Error('Cannot retrieve user info');
  }
}
