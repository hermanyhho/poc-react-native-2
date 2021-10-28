import React from 'react';
import { StyleSheet, Dimensions, View, Text, FlatList, Pressable, Image } from 'react-native';
import _defaultCourseImage from '../../src/assets/images/golf-course-0.jpg';

const {width, height} = Dimensions.get('window');

const renderItem = ({ item }) => (
  <View style={styles.teeTimeListItem}>
    <Image style={styles.teeTimeListItemCourseImage} source={_defaultCourseImage} />
    <View style={styles.teeTimeListItemRight}>
      <Text style={styles.teeTimeListItemClubName}>{item.ClubName}</Text>
      <Text style={styles.teeTimeListItemDateTime}>{item.TeeTimeStart}</Text>
      <Text style={styles.teeTimeListItemPriceOneBall}>£{item.PriceOneBall}</Text>
      <Pressable style={styles.teeTimeListItemBookButton}>
        <Text style={styles.teeTimeListItemBookButtonText}>Book</Text>
      </Pressable>
    </View>
  </View>
);

// render:
export default class TeeSheetList extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <View style={styles.teeSheetList}>
        <FlatList
          data={this.props.data}
          renderItem={item => renderItem(item)}
          //keyExtractor={item => item.ClubId}
        />
      </View>
    )
  } 
}

// styling:
const styles = StyleSheet.create({
  
  // outer list container:
  teeSheetList:{
    width: '100%',
    marginBottom: 15  
  },

  // tee time list: individual list items:
  teeTimeListItem:{
    flexDirection: "row",
    height: 150,
    border: '1px solid #ccc',
    borderRadius: 4,
    marginBottom: 10
  },

  // tee time: course image
  teeTimeListItemCourseImage:{
    flexDirection: "row",
    flex: 2,
    maxWidth: 200,
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    borderRight: '1px solid #ccc',
    backgroundColor: '#eee'
  },

  // tee time: right div
  teeTimeListItemRight:{
    position: 'relative',
    flexDirection: "row",
    flex: 4,
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    padding: 15,
  },

  // tee time: club name
  teeTimeListItemClubName:{ 
    width: '100%',
    fontSize: 20,
    marginBottom: 10,
    overflow: 'hidden',
    fontFamily: 'sans-serif'
  },

  teeTimeListItemDateTime:{
    width: '100%',
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
  },

  // tee time: price
  teeTimeListItemPriceOneBall:{
    position: 'absolute',
    left: 10,
    bottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'sans-serif'
  },
  
  // "Book" button
  teeTimeListItemBookButton:{
    width: 100,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
    position: 'absolute',
    right: 10,
    bottom: 10
  },

  // "Book" button: text
  teeTimeListItemBookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'sans-serif'
  }
})