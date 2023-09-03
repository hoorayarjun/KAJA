import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from 'react-native';
import {RootStackParamList} from '../../App';
import {SafeAreaView} from 'react-native-safe-area-context';
import TitleText from '../components/common/TitleText';
import BackIconButton from '../components/common/BackIconButton';
import SearchLocationInput from '../components/search/SearchLocationInput';
import SearchFilterInput from '../components/search/SearchFilterInput';
import {useState} from 'react';
import KajaSearchButton from '../components/search/KajaSearchButton';

const SearchScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {fontScale} = useWindowDimensions();

  const [filter, setFilter] = useState('');
  const [location, setLocation] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView
        style={{
          backgroundColor: '#FFFFFF',
          height: '100%',
        }}>
        <View
          style={{
            height: '10%',
            padding: '5%',
          }}>
          <BackIconButton />
        </View>

        <View
          style={{
            height: '12.5%',
            alignContent: 'center',
            justifyContent: 'center',
            paddingLeft: '15%',
          }}>
          <TitleText text="Where to?" />
        </View>
        <View
          style={{
            height: '12.5%',
            justifyContent: 'center',
            paddingHorizontal: '15%',
          }}>
          <SearchFilterInput
            value={filter}
            onChangeText={filter => setFilter(filter)}
          />
        </View>
        <View
          style={{
            height: '15%',
            alignContent: 'center',
            justifyContent: 'center',
            paddingHorizontal: '15%',
          }}>
          <SearchLocationInput
            value={location}
            onChangeText={location => setLocation(location)}
          />
        </View>
        <View
          style={{
            height: '15%',
            alignSelf: 'center',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          {filter.length > 0 && location.length > 0 && (
            <KajaSearchButton filter={filter} location={location} />
          )}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SearchScreen;
