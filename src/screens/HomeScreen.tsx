import {
  Image,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LocationIndicator from '../components/common/LocationIndicator';
import SearchFilterInput from '../components/search/SearchFilterInput';
import {Itinerary, ItineraryType} from '../types/itineraries';
import BottomNavBar from '../components/home/BottomNavBar';
import DiscoverItinerariesList from '../components/home/DiscoverItinerariesList';
import LikedItinerariesList from '../components/home/LikedItinerariesList';

const HomeScreen = () => {
  const {fontScale} = useWindowDimensions();

  const itineraryTypes: ItineraryType[] = [
    {text: 'All', value: 'grid-view'},
    {text: 'Restaurant', value: 'restaurant'},
    {text: 'Outdoors', value: 'park'},
    {text: 'Museums', value: 'museum'},
    {text: 'Music', value: 'audiotrack'},
    {text: 'Arts', value: 'theater-comedy'},
    {text: 'Shopping', value: 'shopping-bag'},
  ];

  const itineraries: Itinerary[] = [
    {
      name: 'Restaurant',
      photoUrl: '',
      location: {locationText: 'Washington DC'},
      rating: 4.3,
      reviews: [{description: 'I love DC', rating: 2}],
      itineraryTypes: ['restaurant'],
    },
    {
      name: 'Outdoors',
      photoUrl: '',
      location: {locationText: 'Adams Morgan'},
      rating: 3.8,
      reviews: [],
      itineraryTypes: ['park'],
    },
    {
      name: 'Museams',
      photoUrl: '',
      location: {locationText: 'Adams Morgan'},
      rating: 3.8,
      reviews: [],
      itineraryTypes: ['museum'],
    },
    {
      name: 'Music',
      photoUrl: '',
      location: {locationText: 'Adams Morgan'},
      rating: 3.8,
      reviews: [],
      itineraryTypes: ['audiotrack'],
    },
    {
      name: 'Arts',
      photoUrl: '',
      location: {locationText: 'Adams Morgan'},
      rating: 3.8,
      reviews: [],
      itineraryTypes: ['theater-comedy'],
    },
    {
      name: 'Shopping',
      photoUrl: '',
      location: {locationText: 'Adams Morgan'},
      rating: 3.8,
      reviews: [],
      itineraryTypes: ['shopping-bag'],
    },
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView
        style={{
          backgroundColor: '#FFFFFF',
          alignItems: 'center',
          height: '100%',
        }}>
        <View
          style={{
            height: '12.5%',
            flexDirection: 'row',
            width: '90%',
            alignItems: 'center',
          }}>
          <View style={{width: '70%'}}>
            <Text
              style={{
                fontSize: 27 / fontScale,
                color: '#000000',
                fontWeight: '700',
              }}>
              Good Morning, Traveller!
            </Text>
            <LocationIndicator />
          </View>
          <View>
            <Image
              style={{
                height: 67 / fontScale,
                width: 67 / fontScale,
                resizeMode: 'contain',
                backgroundColor: '#000000',
                borderRadius: 100,
              }}
              source={require('../assets/BlankUserImage.png')}
            />
          </View>
        </View>
        <View
          style={{
            height: '10%',
            width: '90%',
            justifyContent: 'center',
          }}>
          <SearchFilterInput
            value={''}
            onChangeText={() => console.log('nothing')}
          />
        </View>
        <View
          style={{
            height: '45%',
          }}>
          <DiscoverItinerariesList
            itineraryTypes={itineraryTypes}
            itineraries={itineraries}
          />
        </View>
        <View
          style={{
            height: '25%',
          }}>
          <LikedItinerariesList itineraries={itineraries} />
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            height: '7.5%',
            width: '100%',
          }}>
          <BottomNavBar />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
