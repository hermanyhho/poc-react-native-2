import React from 'react';
import { StyleSheet, View, Text, FlatList, Pressable, ImageBackground } from 'react-native';

import _emptyCourseIcon from '../../src/assets/images/adaptive-icon.png';

const renderItem = ({ item }) => (
  <View style={styles.teeTimeListItem}>
    <ImageBackground style={styles.teeTimeListItemCourseImage} src={_emptyCourseIcon} />
    <Text style={styles.teeTimeListItemClubName}>{item.ClubName}</Text>
    <Text style={styles.teeTimeListItemPriceOneBall}>£{item.PriceOneBall}</Text>
    <Pressable style={styles.teeTimeListItemBookButton}>
      <Text style={styles.teeTimeListItemBookButtonText}>Book</Text>
    </Pressable>
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
  teeSheetList:{
    width: '100%',
    padding: 10,
    marginBottom: 15  
  },
  teeTimeListItemCourseImage:{
    width:100,
    height:100,
    flex: 2,
    border: '1px solid #ccc',
    borderRadius: 4
  },
  teeTimeListItem:{
  },
  teeTimeListItemClubName:{
    fontSize: 18,
    marginBottom: 10
  },
  teeTimeListItemPriceOneBall:{
    fontWeight: 'bold'
  },
  teeTimeListItemBookButton:{
    width: 100,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
  },
  teeTimeListItemBookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  }
})