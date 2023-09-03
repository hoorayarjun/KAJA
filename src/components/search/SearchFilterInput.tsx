import {
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";

interface SearchFilterInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchFilterInput = (props: SearchFilterInputProps) => {
  const { value, onChangeText } = props;
  const { fontScale } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        alignContent: "space-between",
        alignItems: "center",
        borderRadius: 100,
        borderColor: "#808080",
        borderWidth: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Icon style={{ paddingLeft: "10%" }} name="search" />
        <TextInput
          style={{
            borderRadius: 100,
            height: 64 / fontScale,
            width: 177 / fontScale,
          }}
          placeholder="Start searching here..."
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      <TouchableOpacity
        style={{
          borderRadius: 100,
          justifyContent: "center",
          backgroundColor: "#F47674",
          height: 40 / fontScale,
          width: 40 / fontScale,
        }}
        onPress={() => console.log("TODO: add filter reccomendations")}
      >
        <Icon name="filter-outline" type="material-community" color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchFilterInput;
