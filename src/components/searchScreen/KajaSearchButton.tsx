import {Text, TouchableOpacity, useWindowDimensions} from 'react-native';

interface KajaSearchButtonProps {
  filter: string;
  location: string;
}

const KajaSearchButton = (props: KajaSearchButtonProps) => {
  const {filter, location} = props;
  const {fontScale} = useWindowDimensions();
  return (
    <TouchableOpacity
      style={{
        borderRadius: 100,
        justifyContent: 'center',
        height: 64 / fontScale,
        width: 127 / fontScale,
        backgroundColor: '#F47674',
      }}
      onPress={() => console.log('filter: ', filter, 'location: ', location)}>
      <Text
        style={{
          color: '#FFFFFF',
          alignSelf: 'center',
          fontSize: 14 / fontScale,
          fontWeight: '700',
        }}>
        Kaja!
      </Text>
    </TouchableOpacity>
  );
};

export default KajaSearchButton;
