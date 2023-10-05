import {
  FlatList,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Itinerary} from '../../types/types';
import ItinerarySummaryCard from './ItinerarySummaryCard';

interface LikedItinerariesListProps {
  itineraries: Itinerary[];
}

const LikedItinerariesList = (props: LikedItinerariesListProps) => {
  const {itineraries} = props;
  const {fontScale} = useWindowDimensions();

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: '5%',
        }}>
        <Text
          style={{
            fontSize: 20 / fontScale,
            color: '#000000',
            fontWeight: '700',
          }}>
          People Liked
        </Text>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 14 / fontScale,
              color: '#000000',
              fontWeight: '700',
            }}>
            View All
          </Text>
          <Icon name="arrow-forward" />
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingLeft: '1%', paddingRight: '10%'}}
        data={itineraries}
        renderItem={itinerary => (
          <>
            <View
              style={{
                borderBottomColor: '#828F9C',
                borderBottomWidth: 1,
              }}
            />
            <ItinerarySummaryCard itinerary={itinerary.item} />
          </>
        )}
      />
    </View>
  );
};

export default LikedItinerariesList;
