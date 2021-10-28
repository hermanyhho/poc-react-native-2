// import core libraries:
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

// now import our own data:
import TeeTimeSearchInputs from './src/components/teeTimeSearchInputs';
import TeeSheetList from './src/components/TeeSheetList';
import _mockData from "./src/assets/data/mockDataTeeTimes";
import _bannerImage from './src/assets/images/golfimage.jpg';

export default function App() {
  const homePageFeaturedTeeTimes = _mockData.splice(0, 4);

  return (
    <View style={styles.homeContainer}>
      <StatusBar style="auto" />

      {/* top background image */}
      <ImageBackground
        style={styles.golfImage}
        source={_bannerImage}>
        <Text style={styles.text}>my awsome golf app!</Text>
        <Text style={styles.smalltext}>Because your worth it !</Text>
      </ImageBackground>

        <TeeTimeSearchInputs />

        <TeeSheetList data={homePageFeaturedTeeTimes}> 
        </TeeSheetList>

    </View>
  );
}

// styling
// TODO: need to separate these out.
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
  golfImage: {
    width: '100%',
    resizeMode: "cover",
    padding: 150,
    paddingLeft: 0,
    paddingRight: 0,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold'
  },
  smalltext: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
