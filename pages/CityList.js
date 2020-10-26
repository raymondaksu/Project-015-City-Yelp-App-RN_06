import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {CityItem, SearchBar} from '../components';

let originalList = [];

const CityList = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cityList, setCityList] = useState([]);

  //Async-await
  const fetchCityData = async () => {
    setIsLoading(true);
    const {data} = await axios.get(
      'https://opentable.herokuapp.com/api/cities',
    );
    setCityList(data.cities);
    originalList = [...data.cities];
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCityData();
  }, []);

  const renderCities = ({item}) => (
    <CityItem
      cityName={item}
      onSelect={() =>
        props.navigation.navigate('Restaurant', {selectedCity: item})
      }
    />
  );
  const renderSeperator = () => (
    <View style={{borderWidth: 1, borderColor: '#e0e0e0'}} />
  );
  function SearchCity(search) {
    const filteredCities = originalList.filter((city) => {
      const text = search.toUpperCase();
      const cityName = city.toUpperCase();

      return cityName.indexOf(text) > -1;
    });
    setCityList(filteredCities);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Cities</Text>
        <SearchBar
          title="Enter a city name.."
          onSearch={(value) => SearchCity(value)}
        />
        {isLoading ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <FlatList
            style={{flex: 1}}
            data={cityList}
            renderItem={renderCities}
            keyExtractor={(_, index) => index.toString()}
            ItemSeparatorComponent={renderSeperator}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export {CityList};
