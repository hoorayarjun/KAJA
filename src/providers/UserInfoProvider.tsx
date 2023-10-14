import {createContext, ReactNode, useEffect, useState} from 'react';
import {getUser_storage} from '../storage/UserStorage';
import {LocationData, User} from '../types/types';

export type UserInfoContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  locationData: LocationData;
  setLocationData: React.Dispatch<React.SetStateAction<LocationData>>;
};

const guestUser: User = {
  id: '',
  firstName: '',
  lastName: '',
  username: '',
};

const defaultLocation: LocationData = {
  locationText: 'Washington DC',
};

export const UserInfoContext = createContext<UserInfoContextType>({
  user: guestUser,
  setUser: () => {},
  locationData: defaultLocation,
  setLocationData: () => {},
});

function UserInfoProvider({children}: {children: ReactNode}) {
  const [user_state, setUser_state] = useState<User>(guestUser);
  const [locationData_state, setLocationData_state] =
    useState<LocationData>(defaultLocation);

  const getUser_provider = async () => {
    const user = await getUser_storage();
    setUser_state(user);
  };

  useEffect(() => {
    getUser_provider();
  }, []);

  return (
    <UserInfoContext.Provider
      value={{
        user: user_state,
        setUser: setUser_state,
        locationData: locationData_state,
        setLocationData: setLocationData_state,
      }}>
      {children}
    </UserInfoContext.Provider>
  );
}

export default UserInfoProvider;
