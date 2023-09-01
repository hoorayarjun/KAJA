import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../App";
import TitleText from "../components/TitleText";
import DescriptionText from "../components/DescriptionText";
import React, { useState } from "react";
import SingleLineInput from "../components/SingleLineTextInput";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { Text } from "react-native";
import ActionButton from "../components/ActionButton";

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { fontScale } = useWindowDimensions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginButtonOnPress = () => {
    if (email === "A" && password === "a") {
      navigation.navigate("HomeScreen");
      console.log("Login Screen: Login Successful");
    } else {
      console.log("Login Screen: Login Failed");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <TitleText text="Welcome Back! 🌎" />
          <DescriptionText
            text="Happy to see you again! Please enter your email and password to login
          into your account."
          />
        </View>
        <View
          style={{
            height: "12.5%",
            justifyContent: "center",
          }}
        >
          <SingleLineInput
            label={"Email Address"}
            value={email}
            hidden={false}
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View
          style={{
            height: "12.5%",
            justifyContent: "center",
          }}
        >
          <SingleLineInput
            label={"Password"}
            value={password}
            hidden={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <View
          style={{
            height: "12.5%",
            justifyContent: "center",
          }}
        >
          <ActionButton
            onPress={loginButtonOnPress}
            text="Login"
            primary={true}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: "5%",
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              marginHorizontal: "5%",
              backgroundColor: "#808080",
            }}
          />
          <DescriptionText text="or" />
          <View
            style={{
              flex: 1,
              height: 1,
              marginHorizontal: "5%",
              backgroundColor: "#808080",
            }}
          />
        </View>
        <View
          style={{
            height: "12.5%",
            justifyContent: "center",
          }}
        >
          <GoogleLoginButton />
        </View>
        <View
          style={{
            height: "30%",
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <DescriptionText text="Don't have an account?" />
          <Text
            style={{
              color: "#000000",
              marginLeft: "5%",
              fontSize: 14 / fontScale,
              fontWeight: "700",
            }}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            Sign Up
          </Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
