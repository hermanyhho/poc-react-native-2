import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

// render:
export default function TeeTimeSearchInputs(props) {
    // var
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const todaysDate = today.toDateString()
    
    // states
    const [postcode, setPostcode] = React.useState('');
    const [date, setDate] = React.useState(todaysDate);
    
    return(
        <View style={styles.searchInputControls}>
            <Text>Postcode</Text>
            <TextInput
            style={styles.input}
            onChangeText={postcode => setPostcode(postcode)}
            onSubmitEditing={postcode => onPostcodeSubmit(postcode)}
            value={postcode}
            />
            <Text>Date</Text>
            <TextInput
            style={styles.input}
            onChangeText={date => setDate(date)}
            value={date}
            placeholder='Choose date'
            />
            <Button color='green' title='Search' />
        </View>
    )
  }

  const styles = StyleSheet.create({
    searchInputControls:{
        width: '100%',
        borderBottom: '1px solid #ccc',
        marginBottom: 15,
        padding: 10
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 4
      },
  });