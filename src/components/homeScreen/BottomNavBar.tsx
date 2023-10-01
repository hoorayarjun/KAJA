import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {RootStackParamList} from '../../../App';
const BottomNavBar = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
      }}>
      <TouchableOpacity
        style={{
          width: '25%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Icon name="home" color="#F47674" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '25%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('SearchScreen')}>
        <Icon name="play-arrow" color="#F47674" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '25%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="add" color="#F47674" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '25%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="person" color="#F47674" />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavBar;
