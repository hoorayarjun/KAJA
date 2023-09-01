import { useNavigation } from "@react-navigation/native";
import { Image, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../App";
import TitleText from "../components/TitleText";
import DescriptionText from "../components/DescriptionText";
import ActionButton from "../components/ActionButton";

const OnboardingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        height: "100%",
      }}
    >
      <View
        style={{
          height: "15%",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <TitleText text="Welcome to Kaja!" />
      </View>
      <Image
        style={{ height: "40%", maxWidth: "75%", resizeMode: "contain" }}
        source={require("../assets/Onboarding.png")}
      />
      <View
        style={{
          height: "20%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TitleText text="Adventure without Planning" />
        <DescriptionText text="Find an itenerary to help you figure out what you want to do today!" />
      </View>
      <View
        style={{
          height: "12.5%",
          justifyContent: "center",
        }}
      >
        <ActionButton
          onPress={() => navigation.navigate("LoginScreen")}
          text="Login"
          primary={true}
        />
      </View>
      <View
        style={{
          height: "12.5%",
          justifyContent: "center",
        }}
      >
        <ActionButton
          onPress={() => navigation.navigate("SignUpScreen")}
          text="Sign up"
          primary={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
