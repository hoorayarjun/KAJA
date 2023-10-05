import {Text, View} from 'react-native';
import {useContext} from 'react';
import {UserInfoContext} from '../../providers/UserInfoProvider';
import {Icon} from 'react-native-elements';

const LocationIndicator = () => {
  const {locationData} = useContext(UserInfoContext);

  return (
    <View style={{flexDirection: 'row'}}>
      <Icon name="location-on" color="#828F9C" />
      <Text style={{color: '#828F9C'}}>{locationData.locationText}</Text>
    </View>
  );
};

export default LocationIndicator;
