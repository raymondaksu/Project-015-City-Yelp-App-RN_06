import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

// address: "Boulevard de las Naciones 1813"
// area: "Acapulco / Ixtapa"
// city: "Acapulco"
// country: "MX"
// id: 107122
// image_url: "https://www.opentable.com/img/restimages/107122.jpg"
// lat: 16.788136
// lng: -99.797593
// mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=107122"
// name: "Shu - Acapulco"
// phone: "017444622001"
// postal_code: "39760"
// price: 4
// reserve_url: "http://www.opentable.com/single.aspx?rid=107122"
// state: "GRO"

const RestaurantDetail = (props) => {
  const {selectedRestaurant} = props.route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#e0e0e0',
        justifyContent: 'space-between',
      }}>
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.name}>{selectedRestaurant.name}</Text>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://lh3.googleusercontent.com/proxy/GeAl7aAmizbywf4JX3siRulrODdwF94vhrnD88Le4XSZvdJYGUV6np1zgOF7BCvLaEzuGSlqxUZ3q7NWg4fWQbE7B3hJ9scfhzOYIkz5j31W9MIGyKVax9Dy5zbAcCuYkvpK7wBkX0AD2Qc',
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{selectedRestaurant.address}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{selectedRestaurant.area}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{selectedRestaurant.phone}</Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.reservationContainer}
          onPress={() =>
            props.navigation.navigate('Web', {
              selectedURL: selectedRestaurant.reserve_url,
            })
          }>
          <Text style={styles.reservation}>Go to Reserve</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export {RestaurantDetail};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: '500',
  },
  image: {
    height: Dimensions.get('window').height * (4.5 / 10),
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
  },
  infoContainer: {
    backgroundColor: 'aqua',
    borderRadius: 5,
    margin: 7,
  },
  infoText: {
    color: 'black',
    padding: 10,
  },
  reservationContainer: {
    backgroundColor: 'grey',
    margin: 10,
    borderRadius: 5,
  },
  reservation: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
