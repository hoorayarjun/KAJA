import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  TouchableOpacity,
  useWindowDimensions,
  Text
} from "react-native";
import { IconButton } from "react-native-paper";
import { RootStackParamList } from "../../../App";

const BackIconButton = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { fontScale } = useWindowDimensions();

  return (
    <TouchableOpacity
      style={{
        borderRadius: 100,
        justifyContent: "center",
        backgroundColor: "#ACABAB",
        height: 54 / fontScale,
        width: 54 / fontScale,
      }}
      onPress={() => navigation.goBack()}
    >
      <IconButton icon="less-than" iconColor="white" />
    </TouchableOpacity>
  );
};

export default BackIconButton;
