import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

interface ActionButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  primary: boolean;
}

const ActionButton = (props: ActionButtonProps) => {
  const {onPress, text, primary} = props;
  const {fontScale} = useWindowDimensions();
  const backgroundColor = primary ? '#F47674' : '#D9D9D9';
  const fontColor = primary ? '#FFFFFF' : '#000000';
  return (
    <TouchableOpacity
      style={{
        borderRadius: 100,
        justifyContent: 'center',
        height: 64 / fontScale,
        width: 346 / fontScale,
        backgroundColor: backgroundColor,
      }}
      onPress={onPress}>
      <Text
        style={{
          color: fontColor,
          alignSelf: 'center',
          fontSize: 14 / fontScale,
          fontWeight: '700',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
