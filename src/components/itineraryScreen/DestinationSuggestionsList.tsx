import {FlatList, Text, useWindowDimensions, View} from 'react-native';
import {Destination} from '../../types/types';
import DestinationSummaryCard from './DestinationSummaryCard';

const destinations: Destination[] = [
  {
    id: '1',
    name: 'destination 1',
    location: {locationText: 'location 1'},
    reviews: [],
    rating: 1,
  },
  {
    id: '2',
    name: 'destination 2',
    location: {locationText: 'location 2'},
    reviews: [],
    rating: 2,
  },
  {
    id: '3',
    name: 'destination 3',
    location: {locationText: 'location 3'},
    reviews: [],
    rating: 3,
  },
  {
    id: '4',
    name: 'destination 4',
    location: {locationText: 'location 4'},
    reviews: [],
    rating: 4,
  },
];

const DestinationSuggestionList = () => {
  const {fontScale} = useWindowDimensions();

  return (
    <View
      style={{
        marginHorizontal: '5%',
      }}>
      <View>
        <Text
          style={{
            fontSize: 16 / fontScale,
            color: '#000000',
            fontWeight: '700',
          }}>
          Add a Stop?
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingLeft: '1%', paddingRight: '10%'}}
        data={destinations}
        renderItem={destination => (
          <>
            <View
              style={{
                borderBottomColor: '#828F9C',
                borderBottomWidth: 1,
              }}
            />
            <DestinationSummaryCard destination={destination.item} />
          </>
        )}
      />
    </View>
  );
};

export default DestinationSuggestionList;
