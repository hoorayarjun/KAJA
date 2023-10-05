import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

interface SingleLineInputProps {
  label: string;
  value: string;
  hidden: boolean;
  onChangeText: (text: string) => void;
}

const SingleLineInput = (props: SingleLineInputProps) => {
  const {label, value, hidden, onChangeText} = props;
  const adjustedLabel = '  ' + label;
  const color = '#808080';

  return (
    <View
      style={{
        borderRadius: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      }}>
      <TextInput
        label={adjustedLabel}
        placeholder={label}
        value={value}
        onChangeText={onChangeText}
        mode="outlined"
        outlineColor={color}
        activeOutlineColor={color}
        outlineStyle={{borderRadius: 100}}
        secureTextEntry={hidden}
      />
    </View>
  );
};

export default SingleLineInput;
