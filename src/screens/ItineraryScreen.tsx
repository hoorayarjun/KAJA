import {RouteProp, useRoute} from '@react-navigation/native';
import {
  Image,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {RootStackParamList} from '../../App';
import ActionButton from '../components/common/ActionButton';
import BackIconButton from '../components/common/BackIconButton';
import LikeItineraryIconButton from '../components/itinerary/LikeItineraryIconButton';
import StopSuggestionsList from '../components/itinerary/StopSuggestionsList';
import TextOverview from '../components/itinerary/TextOverview';
import {Itinerary} from '../types/itineraries';

export interface ItineraryScreenProps {
  itinerary: Itinerary;
}

type ItineraryScreenRouteType = RouteProp<
  RootStackParamList,
  'ItineraryScreen'
>;

const ItineraryScreen = () => {
  const {
    params: {itinerary},
  } = useRoute<ItineraryScreenRouteType>();

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
            height: '50%',
            width: '100%',
          }}>
          <Image
            style={{
              resizeMode: 'cover',
              height: '100%',
              width: '100%',
            }}
            source={require('../assets/kajaLogo.png')}
          />
          <View
            style={{position: 'absolute', left: '5%', top: '5%', zIndex: 1}}>
            <BackIconButton />
          </View>
          <View
            style={{
              position: 'absolute',
              right: '5%',
              bottom: '5%',
              zIndex: 1,
            }}>
            <LikeItineraryIconButton />
          </View>
        </View>
        <View
          style={{
            height: '25%',
            width: '100%',
          }}>
          <TextOverview itinerary={itinerary} />
        </View>
        <View style={{height: '15%', width: '90%'}}>
          <StopSuggestionsList />
        </View>
        <View
          style={{
            height: '10%',
            width: '100%',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
          }}>
          <ActionButton
            onPress={() => console.log('KAJA!')}
            text="Kaja!"
            primary={true}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ItineraryScreen;
