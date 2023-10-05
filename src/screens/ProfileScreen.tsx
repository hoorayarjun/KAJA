import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../App';
import {useState} from 'react';

import {Image, Text} from 'react-native';
import ActionButton from '../components/common/ActionButton';
import BottomNavBar from '../components/homeScreen/BottomNavBar';
import {User} from '../types/types';

const ProfileScreen = () => {
  const {fontScale} = useWindowDimensions();

  const user: User = {
    id: 1,
    firstName: 'firstname',
    lastName: 'lastname',
    username: 'username',
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
            marginTop: '10%',
            height: '15%',
            width: '30%',
            borderColor: '#000000',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/BlankUserImage.png')}
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'cover',
              backgroundColor: '#000000',
              borderRadius: 100,
            }}
          />
        </View>
        <View
          style={{
            height: '15%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20 / fontScale,
              color: '#000000',
              fontWeight: '700',
            }}>
            {user.firstName} {user.lastName}
          </Text>
          <Text
            style={{
              fontSize: 18 / fontScale,
              color: '#000000',
              fontWeight: '700',
            }}>
            @{user.username}
          </Text>
        </View>
        <View
          style={{
            height: '10%',
            width: '65%',
            borderColor: '#000000',
            borderWidth: 1,
            justifyContent: 'center',
          }}>
          <ActionButton
            onPress={() => console.log('edit profile pressed')}
            text={'Edit Profile'}
            primary={true}
          />
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

export default ProfileScreen;
