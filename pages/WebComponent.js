import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {WebView} from 'react-native-webview';

const WebPage = (props) => {
  const webviewRef = React.useRef(null);
  const {selectedURL} = props.route.params;

  function LoadingIndicatorView() {
    return (
      <ActivityIndicator
        color="#0000ff"
        size="large"
        style={styles.ActivityIndicatorStyle}
      />
    );
  }

  function webViewgoback() {
    if (webviewRef.current) webviewRef.current.goBack();
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{uri: selectedURL}}
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
        ref={webviewRef}
      />
      <View style={styles.tabBarContainer}>
        <TouchableOpacity onPress={() => webViewgoback()}>
          <Text style={styles.webText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Details')}>
          <Text style={styles.webText}>Exit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Cities')}>
          <Text style={styles.webText}>Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export {WebPage};

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: '#5d2d6e',
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  webText: {
    fontSize: 20,
    color: '#161b2b',
    backgroundColor: '#b4b7bf',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
});
