import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
  Text,
} from 'react-native';
import {RootStackParamList} from '../../App';
import {useState} from 'react';
import TitleText from '../components/common/TitleText';
import DescriptionText from '../components/common/DescriptionText';
import {SafeAreaView} from 'react-native-safe-area-context';
import SingleLineInput from '../components/common/SingleLineTextInput';
import ActionButton from '../components/common/ActionButton';

const SignUpScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {fontScale} = useWindowDimensions();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signUpButtonPress = () => {
    if (fullName && email && password === confirmPassword) {
      navigation.navigate('HomeScreen');
    } else {
      console.log('Something went wrong');
    }
  };

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
            height: '15%',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <TitleText text="Sign Up" />
          <DescriptionText text="Welcome! Please enter your Name, email and password to create your account." />
        </View>
        <View
          style={{
            height: '12.5%',
            justifyContent: 'center',
          }}>
          <SingleLineInput
            label={'Full Name'}
            value={fullName}
            hidden={false}
            onChangeText={text => setFullName(text)}
          />
        </View>
        <View
          style={{
            height: '12.5%',
            justifyContent: 'center',
          }}>
          <SingleLineInput
            label={'Email Address'}
            value={email}
            hidden={false}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View
          style={{
            height: '12.5%',
            justifyContent: 'center',
          }}>
          <SingleLineInput
            label={'Your Password'}
            value={password}
            hidden={true}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View
          style={{
            height: '12.5%',
            justifyContent: 'center',
          }}>
          <SingleLineInput
            label={'Re-enter Password'}
            value={confirmPassword}
            hidden={true}
            onChangeText={text => setConfirmPassword(text)}
          />
        </View>
        <View
          style={{
            height: '12.5%',
            justifyContent: 'center',
          }}>
          <ActionButton
            onPress={signUpButtonPress}
            text="Sign Up"
            primary={true}
          />
        </View>
        <View
          style={{
            height: '22.5%',
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <DescriptionText text="Already have an account?" />
          <Text
            style={{
              color: '#000000',
              marginLeft: '5%',
              fontSize: 14 / fontScale,
              fontWeight: '700',
            }}
            onPress={() => navigation.navigate('LoginScreen')}>
            Login
          </Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
