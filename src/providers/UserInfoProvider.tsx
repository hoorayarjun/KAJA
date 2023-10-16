import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {getUser} from '../services/userService';
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
  firstName: '',
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

  const getUser_provider = useCallback(async () => {
    const user = await getUser(user_state.id);
    console.log('this user is being used : ', user);
    setUser_state(user);
  }, [user_state.id]);

  useEffect(() => {
    getUser_provider;
  }, [reload, getUser_provider]);

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
