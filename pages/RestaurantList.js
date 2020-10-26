import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {RestaurantItem, SearchBar} from '../components';

let originalList = [];

const RestaurantList = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurantList, setRestaurantList] = useState([]);
  const {selectedCity} = props.route.params;

  const fetchRestaurants = () => {
    setIsLoading(true);
    Axios.get('http://opentable.herokuapp.com/api/restaurants', {
      params: {
        city: selectedCity,
      },
    }).then((response) => {
      setRestaurantList(response.data.restaurants);
      originalList = [...response.data.restaurants];
    });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const renderRestaurant = ({item}) => {
    return (
      <RestaurantItem
        restaurant={item}
        onSelect={() =>
          props.navigation.navigate('Details', {selectedRestaurant: item})
        }
      />
    );
  };

  const SearchRestaurant = (value) => {
    const filteredRestaurant = originalList.filter((restaurant) => {
      const text = value.toUpperCase();
      const restaurantName = restaurant.name.toUpperCase();

      return restaurantName.indexOf(text) > -1;
    });

    setRestaurantList(filteredRestaurant);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 30, padding: 5, fontWeight: 'bold'}}>
          {selectedCity}
        </Text>
        <SearchBar
          title="Enter a restaurant name.."
          onSearch={(value) => SearchRestaurant(value)}
        />
        {isLoading ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <FlatList
            data={restaurantList}
            renderItem={renderRestaurant}
            keyExtractor={(_, index) => index.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export {RestaurantList};
