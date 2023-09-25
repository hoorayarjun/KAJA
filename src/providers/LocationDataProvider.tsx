import {createContext, ReactNode, useMemo, useState} from 'react';
import {LocationData} from '../types/itineraries';

export type LocationDataContextType = {
  locationData: LocationData;
  setLocationData: React.Dispatch<React.SetStateAction<LocationData>>;
};

export const LocationDataContext = createContext<LocationDataContextType>({
  locationData: {locationText: 'Washington DC'},
  setLocationData: () => {},
});

function LocationDataProvider({children}: {children: ReactNode}) {
  const [locationData, setLocationData] = useState<LocationData>({
    locationText: 'Washington DC',
  });

  const value = useMemo(
    () => ({locationData, setLocationData}),
    [locationData, setLocationData],
  );

  return (
    <LocationDataContext.Provider value={value}>
      {children}
    </LocationDataContext.Provider>
  );
}

export default LocationDataProvider;
