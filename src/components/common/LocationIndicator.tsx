import {Text, View} from 'react-native';
import {useContext} from 'react';
import {LocationDataContext} from '../../providers/LocationDataProvider';
import {Icon} from 'react-native-elements';

const LocationIndicator = () => {
  const {locationData} = useContext(LocationDataContext);

  return (
    <View style={{flexDirection: 'row'}}>
      <Icon name="location-on" color="#828F9C" />
      <Text style={{color: '#828F9C'}}>{locationData.locationText}</Text>
    </View>
  );
};

export default LocationIndicator;
