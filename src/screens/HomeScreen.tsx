import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import { RootStackParamList } from "../../App";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionButton from "../components/ActionButton";

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { fontScale } = useWindowDimensions();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView
        style={{
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 30 / fontScale,
            color: "#000000",
            fontWeight: "700",
            maxWidth: "95%",
          }}
        >
          Home Screen!
          <ActionButton
            onPress={() => navigation.navigate("SearchScreen")}
            text="Go to Search Flow"
            primary={true}
          />
        </Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
