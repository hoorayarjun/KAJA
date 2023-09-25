import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Itinerary} from '../../types/itineraries';

interface ItinerarySummaryCard {
  itinerary: Itinerary;
}

const ItinerarySummaryCard = (props: ItinerarySummaryCard) => {
  const {itinerary} = props;
  const {fontScale} = useWindowDimensions();

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 100 / fontScale,
        width: '100%',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/kajaLogo.png')}
        resizeMode="contain"
        style={{
          maxHeight: '80%',
          width: '25%',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      />
      <View
        style={{
          backgroundColor: '#FFFFFF',
          paddingLeft: '5%',
          paddingVertical: '2%',
          height: '100%',
          width: '70%',
          justifyContent: 'space-evenly',
        }}>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 14 / fontScale,
            color: '#000000',
            fontWeight: '700',
          }}>
          {itinerary.name}
        </Text>
        <Text
          style={{
            fontSize: 10 / fontScale,
          }}>
          𖡡 {itinerary.location.locationText}
        </Text>
        <Text style={{fontSize: 10 / fontScale, color: '#828F9C'}}>
          ★ {itinerary.rating} | {itinerary.reviews.length} Reviews
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          width: '15%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            borderColor: '#F47674',
            borderWidth: 1,
            borderRadius: 100,
            height: '50%',
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="arrow-forward-ios" color="#828F9C" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItinerarySummaryCard;
