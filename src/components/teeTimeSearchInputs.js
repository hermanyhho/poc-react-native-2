import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";

// render:
export default function TeeTimeSearchInputs(props) {
  // var
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const todaysDate = today.toDateString();
  const { width, height } = Dimensions.get("window");
  console.log(width);

  // states
  const [postcode, setPostcode] = React.useState("");
  const [date, setDate] = React.useState(todaysDate);

  return (
    <SafeAreaView>
      <View style={
          styles.searchInputControls,
          width <= 480 ? styles.searchInputControlsXs : styles.searchInputControlsMd
        }>
        <View style={ 
            styles.searchInput, 
            width <= 480 ? styles.searchInputXs : styles.searchInputMd}>
          <Text style={styles.inputLabel}>Postcode</Text>
          <TextInput
            style={styles.input}
            onChangeText={(postcode) => setPostcode(postcode)}
            onSubmitEditing={(postcode) => onPostcodeSubmit(postcode)}
            value={postcode}
          />
        </View>
        <View style={ 
            styles.searchInput, 
            width <= 480 ? styles.searchInputXs : styles.searchInputMd}>
          <Text style={styles.inputLabel}>Date</Text>
          <TextInput
            style={styles.input}
            onChangeText={(date) => setDate(date)}
            value={date}
            placeholder="Choose date"
          />
        </View>
      </View>
      <View style={styles.searchButtonContainer}>
        <Button color="green" title="Search" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchInputControls: {
    borderBottom: "1px solid #ccc",
    border: "1px solid #ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#eee",
  },
  searchInputControlsXs:{
    borderBottom: "1px solid #ccc",
    border: "1px solid #ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#eee",
  },
  searchInputControlsMd:{
    borderBottom: "1px solid #ccc",
    border: "1px solid #ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#eee",
    flex: 1,
    flexDirection: "row",
  },
  searchInput: {
    marginBottom: 10,
  },
  searchInputXs: {
    width: "100%",
  },
  searchInputMd: {
    width: "50%",
    flex: 2,
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "stretch",
    marginHorizontal: 5,
  },
  inputLabel: {
    paddingVertical: 8,
    fontWeight: "bold",
    fontSize: 15,
    color: "#666",
    textAlign: "left",
  },
  input: {
    height: 40,
    padding: 10,
    border: "1px solid #888",
    borderRadius: 4,
    backgroundColor: "#fff",
    color: "#333",
  },
  searchButtonContainer: {
    width: "50%",
    alignSelf: "center",
    marginBottom: 15,
  },
});
