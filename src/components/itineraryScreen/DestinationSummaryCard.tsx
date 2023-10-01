import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Destination} from '../../types/types';

interface DestinationSummaryCardProps {
  destination: Destination;
}

const DestinationSummaryCard = (props: DestinationSummaryCardProps) => {
  const {destination} = props;
  const {fontScale} = useWindowDimensions();

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 70 / fontScale,
        width: '100%',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/kajaLogo.png')}
        resizeMode="cover"
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
          {destination.name}
        </Text>
        <Text
          style={{
            fontSize: 10 / fontScale,
          }}>
          𖡡 {destination.location.locationText}
        </Text>
        <Text style={{fontSize: 10 / fontScale, color: '#828F9C'}}>
          ★ {destination.rating} | {destination.reviews.length} Reviews
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

export default DestinationSummaryCard;
