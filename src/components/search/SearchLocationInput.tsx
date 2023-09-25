import {TextInput, View, useWindowDimensions} from 'react-native';
import {Icon} from 'react-native-elements';

interface SearchLocationInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchLocationInput = (props: SearchLocationInputProps) => {
  const {value, onChangeText} = props;
  const {fontScale} = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 100,
        borderColor: '#808080',
        borderWidth: 1,
      }}>
      <Icon style={{paddingLeft: '10%'}} name="location-on" />
      <TextInput
        style={{
          borderRadius: 100,
          height: 64 / fontScale,
          width: 177 / fontScale,
        }}
        placeholder="Location"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchLocationInput;
