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
        <>
            <View style={styles.searchInputControls}>
                <View style={styles.searchInput}>
                    <Text style={styles.inputLabel}>Postcode</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={postcode => setPostcode(postcode)}
                        onSubmitEditing={postcode => onPostcodeSubmit(postcode)}
                        value={postcode}
                    />
                </View>
                <View style={styles.searchInput}>
                    <Text style={styles.inputLabel}>Date</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={date => setDate(date)}
                        value={date}
                        placeholder='Choose date'
                    />
                </View>
            </View>
            <View style={styles.searchButtonContainer}>
                <Button color='green' title='Search' />
            </View>
        </>
    )
  }

  const styles = StyleSheet.create({
    searchInputControls:{
        flex: 1,
        flexDirection: 'row',
        borderBottom: '1px solid #ccc',
        border: '1px solid #ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#eee'
    },
    searchInput:{
        width: '50%',
        flex: 2,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'stretch',
        marginHorizontal: 5,
        marginBottom: 10
    },
    inputLabel:{
        paddingVertical: 8,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#666',
        textAlign: 'left',
    },
    input: {
        height: 40,
        padding: 10,
        border: '1px solid #888',
        borderRadius: 4,
        backgroundColor: '#fff',
        color: '#333'
    },
    searchButtonContainer: {
        width: '50%',
        alignSelf: 'center',
        marginBottom: 15
    }
  });