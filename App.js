// import core libraries:
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, Text, View, ImageBackground } from 'react-native';

// now import our own data:
import TeeTimeSearchInputs from './src/components/teeTimeSearchInputs';
import TeeSheetList from './src/components/TeeSheetList';
import _mockData from "./src/assets/data/mockDataTeeTimes";
import _bannerImage from './src/assets/images/golfimage.jpg';

export default function App() {
  const {width, height} = Dimensions.get('window');
  const homePageFeaturedTeeTimes = _mockData.splice(0, 5);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.mainContent}>
        <StatusBar style="auto" />

        {/* top background image */}
        <ImageBackground style={styles.pageHeaderImage} source={_bannerImage}>
          <Text style={styles.imageHeader}>My Awesome App</Text>
          <Text style={styles.imageSubHeader}>(a.k.a Bookalot)</Text>
        </ImageBackground>

        <TeeTimeSearchInputs />

        <Text style={styles.sectionHeader}>Featured Tee Times</Text>
        <TeeSheetList data={homePageFeaturedTeeTimes}></TeeSheetList>
      </View>
    </View>
  );
}

// styling
// TODO: need to separate these out.
const styles = StyleSheet.create({
  outerContainer:{
    width: '100%',
    backgroundColor: '#eee',
  },
  mainContent: {
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  pageHeaderImage: {
    width: '100%',
    resizeMode: "cover",
    marginTop: 15,
    padding: 150,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 15,
  },
  sectionHeader:{
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 15
  },
  imageHeader: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  imageSubHeader: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
});
