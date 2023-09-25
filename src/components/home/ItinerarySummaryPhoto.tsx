import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {Itinerary} from '../../types/itineraries';

interface ItinerarySummaryPhotoProps {
  itinerary: Itinerary;
}

const ItinerarySummaryPhoto = (props: ItinerarySummaryPhotoProps) => {
  const {itinerary} = props;
  const {fontScale} = useWindowDimensions();

  return (
    <TouchableOpacity
      style={{
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 180 / fontScale,
        height: '100%',
      }}>
      <Image
        source={require('../../assets/kajaLogo.png')}
        resizeMode="cover"
        style={{
          height: '100%',
          maxWidth: '100%',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      />
      <View
        style={{
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          backgroundColor: '#FFFFFF',
          position: 'absolute',
          top: '60%',
          height: '35%',
          width: '90%',
          paddingVertical: '7.5%',
          justifyContent: 'space-between',
          paddingLeft: '5%',
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
        <Text style={{fontSize: 10 / fontScale, color: '#828F9C'}}>
          𖡡 {itinerary.location.locationText}
        </Text>
        <Text style={{fontSize: 10 / fontScale, color: '#828F9C'}}>
          ★ {itinerary.rating} | {itinerary.reviews.length} Reviews
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItinerarySummaryPhoto;
