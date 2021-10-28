import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView,TextInput } from 'react-native';

export default function App() {
  // const onChangeText = function(data){
  //   // validation here
  //   console.log(data);
  // }
  // const onChangeDate = function(data){
  //   // validation here
  //   console.log(data);
  // }
const onPostcodeSubmit = function(data){
  console.log(data);
}

  const [postcode, setPostcode] = React.useState('M2 3NG');
  const [date, setDate] = React.useState(Date.now());

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* top background image */}
      <ImageBackground
        style={styles.golfImage}
        source={require('./Images/golfimage.jpg')}>
        <Text style={styles.text}>my awsome golf app!</Text>
        <Text style={styles.smalltext}>Because your worth it !</Text>
      </ImageBackground>

      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={postcode => setPostcode(postcode)}
          onSubmitEditing={postcode => onPostcodeSubmit(postcode)}
          value={postcode}
        />
        <TextInput
          style={styles.input}
          onChangeText={date => setDate(date)}
          value={date}
          placeholder='Choose date'
        />
      </SafeAreaView>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
  golfImage: {
    width: 750,
    resizeMode: "cover",
    padding: 150,
    paddingLeft: 0,
    paddingRight: 0,
    //border: '1px solid blue'
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
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
