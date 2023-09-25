import {useEffect, useState} from 'react';
import {FlatList, Text, useWindowDimensions, View} from 'react-native';
import {Itinerary, ItineraryType} from '../../types/itineraries';
import ItinerarySummaryPhoto from './ItinerarySummaryPhoto';
import ItineraryTypeChip from './ItineraryTypeChip';

interface DiscoverItinerariesListProps {
  itineraryTypes: ItineraryType[];
  itineraries: Itinerary[];
}

const DiscoverItinerariesList = (props: DiscoverItinerariesListProps) => {
  const {itineraryTypes, itineraries} = props;

  const {fontScale} = useWindowDimensions();

  const [selectedItineraryType, setSelectedItineraryType] =
    useState<ItineraryType>(itineraryTypes[0]);

  const [filteredItineraries, setFilteredItineraries] =
    useState<Itinerary[]>(itineraries);

  useEffect(() => {
    if (selectedItineraryType.value === 'grid-view') {
      setFilteredItineraries(itineraries);
    } else {
      setFilteredItineraries(
        itineraries.filter(itinerary =>
          itinerary.itineraryTypes.includes(selectedItineraryType.value),
        ),
      );
    }
  }, [itineraries, selectedItineraryType]);

  return (
    <View>
      <View
        style={{
          width: '90%',
          height: '15%',
          marginLeft: '5%',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 20 / fontScale,
            color: '#000000',
            fontWeight: '700',
          }}>
          Discover Itineraries
        </Text>
      </View>
      <View
        style={{
          paddingVertical: '3%',
          paddingLeft: '4%',
          height: '20%',
        }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: '1%'}} />}
          contentContainerStyle={{paddingLeft: '1%', paddingRight: '10%'}}
          data={itineraryTypes}
          extraData={selectedItineraryType}
          renderItem={itinerary => (
            <ItineraryTypeChip
              itineraryType={itinerary.item}
              isSelected={itinerary.item === selectedItineraryType}
              onPress={() => setSelectedItineraryType(itinerary.item)}
            />
          )}
        />
      </View>
      <View
        style={{
          height: '65%',
        }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: '1%'}} />}
          contentContainerStyle={{paddingLeft: '1%', paddingRight: '10%'}}
          data={filteredItineraries}
          renderItem={itinerary => (
            <ItinerarySummaryPhoto itinerary={itinerary.item} />
          )}
        />
      </View>
    </View>
  );
};

export default DiscoverItinerariesList;
