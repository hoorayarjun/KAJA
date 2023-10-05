import {Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Itinerary} from '../../types/types';

interface TextOverviewProps {
  itinerary: Itinerary;
}

const TextOverview = (props: TextOverviewProps) => {
  const {itinerary} = props;
  const {fontScale} = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'flex-start',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        justifyContent: 'space-between',
      }}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Icon name="location-on" color="#000000" />
          <Text style={{color: '#000000', fontSize: 14 / fontScale}}>
            {itinerary.location.locationText}
          </Text>
        </View>
        <Text
          style={{
            color: '#000000',
            fontSize: 32 / fontScale,
            fontWeight: '700',
          }}>
          {itinerary.name}
        </Text>
        <Text
          style={{color: '#828F9C', fontSize: 14 / fontScale}}
          numberOfLines={4}>
          {itinerary.summary}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Icon name="star" sty />
        <Text style={{color: '#000000'}}>{itinerary.rating}</Text>
        <View style={{marginHorizontal: '5%'}}>
          <TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Icon name="reviews" />
              <Text>Read Reviews</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TextOverview;
