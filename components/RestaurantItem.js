import React from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';

const RestaurantItem = (props) => {

  const price = props.restaurant.price

  return (
    <TouchableOpacity style={styles.container} onPress={props.onSelect}>
      <Image style={styles.image} source={{uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}} />
      <View style={styles.subContainer}>
        <Text style={styles.text}>{props.restaurant.name}</Text>
        <Text style={styles.price}>{'$'.repeat(price)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {RestaurantItem};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#bdbdbd',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    height: Dimensions.get('window').height / 3,
    borderRadius: 5
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'green'
  },
});
