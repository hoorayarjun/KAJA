import {
  Image,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchFilterInput from '../components/searchScreen/SearchFilterInput';
import {Itinerary, ItineraryTag} from '../types/types';
import LocationIndicator from '../components/common/LocationIndicator';
import LikedItinerariesList from '../components/homeScreen/LikedItinerariesList';
import BottomNavBar from '../components/homeScreen/BottomNavBar';
import DiscoverItinerariesList from '../components/homeScreen/DiscoverItinerariesList';
import {useContext} from 'react';
import {UserInfoContext} from '../providers/UserInfoProvider';

const HomeScreen = () => {
  const {fontScale} = useWindowDimensions();
  const {user} = useContext(UserInfoContext);

  const itineraryTypes: ItineraryTag[] = [
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
              Good Morning, {user.firstName}!
            </Text>
            <LocationIndicator />
          </View>
          <View>
            <Image
              style={{
                height: 67 / fontScale,
                width: 67 / fontScale,
                resizeMode: 'cover',
                backgroundColor: '#000000',
                borderRadius: 100,
              }}
              source={
                user.profilePictureUrl
                  ? {uri: user.profilePictureUrl}
                  : require('../assets/BlankUserImage.png')
              }
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
            position: 'absolute',
            height: '7.5%',
            width: '100%',
            bottom: 0,
          }}>
          <BottomNavBar />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
