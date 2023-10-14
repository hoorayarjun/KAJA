import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Image, Text} from 'react-native';
import ActionButton from '../components/common/ActionButton';
import BottomNavBar from '../components/homeScreen/BottomNavBar';
import {useContext, useState} from 'react';
import {UserInfoContext} from '../providers/UserInfoProvider';
import SingleLineInput from '../components/common/SingleLineTextInput';
import {updateUserInfo} from '../services/userService';

const ProfileScreen = () => {
  const {fontScale} = useWindowDimensions();
  const {user} = useContext(UserInfoContext);
  const [editMode, setEditMode] = useState(false);
  const [username, setUserName] = useState(user.username);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

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
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={
              user.profilePictureUrl
                ? {uri: user.profilePictureUrl}
                : require('../assets/BlankUserImage.png')
            }
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'cover',
              borderColor: '#F47674',
              borderWidth: 1,
              backgroundColor: '#000000',
              borderRadius: 100,
            }}
          />
        </View>
        {editMode ? (
          <View
            style={{
              height: '15%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', height: '50%', width: '100%'}}>
              <View style={{height: '100%', width: '50%'}}>
                <SingleLineInput
                  label="First Name"
                  value={firstName}
                  hidden={false}
                  onChangeText={text => setFirstName(text)}
                />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '50%',
                }}>
                <SingleLineInput
                  label="Last Name"
                  value={lastName}
                  hidden={false}
                  onChangeText={text => setLastName(text)}
                />
              </View>
            </View>
            <View
              style={{
                height: '50%',
                alignSelf: 'center',
              }}>
              <SingleLineInput
                label="Username"
                value={username}
                hidden={false}
                onChangeText={text => setUserName(text)}
              />
            </View>
          </View>
        ) : (
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
                color: '#F47674',
                fontWeight: '700',
              }}>
              @{user.username}
            </Text>
          </View>
        )}
        <View
          style={{
            height: '10%',
            width: '65%',
            justifyContent: 'center',
          }}>
          {editMode ? (
            <ActionButton
              onPress={async () => {
                setEditMode(false);
                await updateUserInfo(user.id, {firstName, lastName, username});
              }}
              text={'Save Profile'}
              primary={true}
            />
          ) : (
            <ActionButton
              onPress={() => setEditMode(true)}
              text={'Edit Profile'}
              primary={true}
            />
          )}
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
