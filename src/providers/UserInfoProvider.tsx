import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {getUser} from '../services/userService';
import {getUser_storage} from '../storage/UserStorage';
import {LocationData, User} from '../types/types';

export type UserInfoContextType = {
  refetchUserData: () => void;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  locationData: LocationData;
  setLocationData: React.Dispatch<React.SetStateAction<LocationData>>;
};

const guestUser: User = {
  id: '',
  firstName: 'Guest',
  lastName: '',
  username: '',
};

const defaultLocation: LocationData = {
  locationText: 'Washington DC',
};

export const UserInfoContext = createContext<UserInfoContextType>({
  refetchUserData: () => {},
  user: guestUser,
  setUser: () => {},
  locationData: defaultLocation,
  setLocationData: () => {},
});

function UserInfoProvider({children}: {children: ReactNode}) {
  const [reload, setReload] = useState(false);
  const [user_state, setUser_state] = useState<User>(guestUser);
  const [locationData_state, setLocationData_state] =
    useState<LocationData>(defaultLocation);

  const refetchUserData = () => {
    setReload(!reload);
  };

  useEffect(() => {
    const getUser_provider = async () => {
      const userId = (await getUser_storage()).id;
      const user = await getUser(userId);
      setUser_state(user);
    };

    getUser_provider();
  }, [reload]);

  return (
    <UserInfoContext.Provider
      value={{
        refetchUserData,
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
