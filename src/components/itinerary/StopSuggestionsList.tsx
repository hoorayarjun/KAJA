import {FlatList, Text, useWindowDimensions, View} from 'react-native';
import {Itinerary} from '../../types/itineraries';
import ItinerarySummaryCard from '../home/ItinerarySummaryCard';

const itineraries: Itinerary[] = [
  {
    id: 1,
    name: 'Restaurant',
    photoUrl: '',
    summary:
      'Some random stuff about restaurants. But the text is extremely long for some reason. And the person said that every restuarant sucks. It is unknown why this itinerary has such a high review despite it sucking ass. It was also revealed that the restaurant was on kitchen nightmares and almost shutdown for the rat infestation. Sad news in the press. ',
    location: {locationText: 'Washington DC'},
    rating: 4.3,
    reviews: [{description: 'I love DC', rating: 2}],
    itineraryTypes: ['restaurant'],
  },
  {
    id: 2,
    name: 'Outdoors',
    photoUrl: '',
    location: {locationText: 'Adams Morgan'},
    rating: 3.8,
    reviews: [],
    itineraryTypes: ['park'],
  },
  {
    id: 3,
    name: 'Museams',
    photoUrl: '',
    summary: 'Some random stuff about museams',
    location: {locationText: 'Adams Morgan'},
    rating: 3.8,
    reviews: [],
    itineraryTypes: ['museum'],
  },
  {
    id: 4,
    name: 'Music',
    photoUrl: '',
    summary: 'Some random stuff about music',
    location: {locationText: 'Adams Morgan'},
    rating: 3.8,
    reviews: [],
    itineraryTypes: ['audiotrack'],
  },
  {
    id: 5,
    name: 'Arts',
    photoUrl: '',
    summary: 'Some random stuff about restaurants',
    location: {locationText: 'Adams Morgan'},
    rating: 3.8,
    reviews: [],
    itineraryTypes: ['theater-comedy'],
  },
  {
    id: 6,
    name: 'Shopping',
    photoUrl: '',
    location: {locationText: 'Adams Morgan'},
    rating: 3.8,
    reviews: [],
    itineraryTypes: ['shopping-bag'],
  },
];

const StopSuggestionsList = () => {
  const {fontScale} = useWindowDimensions();

  return (
    <View>
      <View
        style={{
          width: '100%',
        }}>
        <Text
          style={{
            fontSize: 20 / fontScale,
            color: '#000000',
            fontWeight: '700',
          }}>
          Add a Stop?
        </Text>
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

export default StopSuggestionsList;
