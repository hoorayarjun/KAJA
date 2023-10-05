import {TouchableOpacity, useWindowDimensions} from 'react-native';
import {IconButton} from 'react-native-paper';

const LikeItineraryIconButton = () => {
  const {fontScale} = useWindowDimensions();

  return (
    <TouchableOpacity
      style={{
        borderRadius: 100,
        justifyContent: 'center',
        backgroundColor: '#F47674',
        height: 54 / fontScale,
        width: 54 / fontScale,
      }}>
      <IconButton icon="heart-outline" iconColor="white" />
    </TouchableOpacity>
  );
};

export default LikeItineraryIconButton;
