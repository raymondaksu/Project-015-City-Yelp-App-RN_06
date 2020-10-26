import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.title}
        onChangeText={(val) => props.onSearch(val)}
      />
    </View>
  );
};

export {SearchBar};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    margin: 5,
    padding: 5,
    borderRadius: 5,
    height: 50
  },
});
