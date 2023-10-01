import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Image, Text, TouchableOpacity, useWindowDimensions} from 'react-native';
import {RootStackParamList} from '../../../App';

const GoogleLoginButton = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {fontScale} = useWindowDimensions();
  return (
    <TouchableOpacity
      style={{
        borderRadius: 100,
        height: 64 / fontScale,
        width: 346 / fontScale,
        backgroundColor: '#FFFFFF',
        borderColor: '#808080',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}
      onPress={() => navigation.navigate('HomeScreen')}>
      <Image
        style={{
          height: 24 / fontScale,
          width: 24 / fontScale,
          resizeMode: 'cover',
          backgroundColor: '#FFFFFF',
        }}
        source={require('../../assets/GoogleLogo.jpg')}
      />
      <Text
        style={{
          color: '#000000',
          alignSelf: 'center',
          fontSize: 14 / fontScale,
          fontWeight: '700',
          marginLeft: '3%',
        }}>
        Login with Google
      </Text>
    </TouchableOpacity>
  );
};

export default GoogleLoginButton;
