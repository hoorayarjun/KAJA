import {Text, useWindowDimensions} from 'react-native';

interface DescriptionTextProps {
  text: string;
}

const DescriptionText = (props: DescriptionTextProps) => {
  const {text} = props;
  const {fontScale} = useWindowDimensions();

  return (
    <Text
      style={{
        fontSize: 14 / fontScale,
        fontWeight: '400',
        color: '#808080',
        maxWidth: '85%',
      }}>
      {text}
    </Text>
  );
};

export default DescriptionText;
