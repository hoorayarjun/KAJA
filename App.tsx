import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from './src/screens/OnboardingScreen';
import {PaperProvider} from 'react-native-paper';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import ItineraryScreen, {
  ItineraryScreenProps,
} from './src/screens/ItineraryScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import UserInfoProvider from './src/providers/UserInfoProvider';

export type RootStackParamList = {
  OnboardingScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  HomeScreen: undefined;
  SearchScreen: undefined;
  ItineraryScreen: ItineraryScreenProps;
  ProfileScreen: undefined;
};

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <UserInfoProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="ItineraryScreen" component={ItineraryScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </UserInfoProvider>
  );
}
