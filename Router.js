import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, View, Text, Button, FlatList} from 'react-native';

const Stack = createStackNavigator();

import {CityList, RestaurantList, RestaurantDetail, WebPage} from './pages';

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
        }}>
        <Stack.Screen name="Cities" component={CityList} />
        <Stack.Screen name="Restaurant" component={RestaurantList} />
        <Stack.Screen name="Details" component={RestaurantDetail} />
        <Stack.Screen
          name="Web"
          component={WebPage}
          options={{
            headerTintColor: 'green',
            title: 'WebView',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
