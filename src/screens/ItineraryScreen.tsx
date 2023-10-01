import {RouteProp, useRoute} from '@react-navigation/native';
import {
  Keyboard,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {RootStackParamList} from '../../App';
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
        <TextOverview itinerary={itinerary}></TextOverview>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ItineraryScreen;
