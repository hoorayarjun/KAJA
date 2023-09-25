import {Text, TouchableOpacity, useWindowDimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import {ItineraryType} from '../../types/itineraries';

interface itineraryTypeChipProps {
  itineraryType: ItineraryType;
  isSelected: boolean;
  onPress: () => void;
}

const ItineraryTypeChip = (props: itineraryTypeChipProps) => {
  const {itineraryType, isSelected, onPress} = props;
  const {fontScale} = useWindowDimensions();

  return isSelected ? (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 100,
        justifyContent: 'center',
        height: 40 / fontScale,
        backgroundColor: '#F47674',
      }}
      onPress={onPress}>
      <Icon color="#FFFFFF" name={itineraryType.value} />
      <Text
        style={{
          color: '#FFFFFF',
          alignSelf: 'center',
          fontSize: 14 / fontScale,
        }}>
        {itineraryType.text}
      </Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 100,
        justifyContent: 'center',
        height: 40 / fontScale,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#828F9C',
      }}
      onPress={onPress}>
      <Icon color="#828F9C" name={itineraryType.value} />
      <Text
        style={{
          color: '#828F9C',
          alignSelf: 'center',
          fontSize: 14 / fontScale,
        }}>
        {itineraryType.text}
      </Text>
    </TouchableOpacity>
  );
};

export default ItineraryTypeChip;
