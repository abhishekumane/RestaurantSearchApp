import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';

const DATA = require('./getRestaurantsAPI.json').response


function Home({ navigation }) {

  const [search, setSearch] = useState('');
  const onChangeSearch = query => setSearch(query);
  
  return (
        <View style={styles.container}>
            <Text style={styles.app_title}>Welcome to Adam's Restaurant App</Text>
            <View style={styles.searchbar}>
              <SearchBar 
                platform="android"
                placeholder="Search Restaurants Here"
                onChangeText={onChangeSearch}
                value={search}
              />
            </View>
            <FlatList 
              data={DATA}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <View style={styles.category}>
                    <Text style={styles.category_title}>{item.category}</Text>
                    <FlatList
                    data={item.restaurantList}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => {
                      return (
                        <View style={styles.restaurant}>
                          <TouchableOpacity onPress={ () => navigation.navigate(item.id)}>
                            <Text style={styles.restaurant_name}>{item.name}</Text>
                            <Image style={styles.image} source={{uri: item.imageUrl}} />
                            <View style={styles.restaurant_ratingContainer}>
                              <Text style={styles.restaurant_rating}>Average Rating: {item.rating}</Text>
                              <Text style={styles.restaurant_review}>Number of Reviews: {item.review}</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      );
                    }} 
                    horizontal
                    />
                  </View>
                );
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#BABCBC',
      alignItems: 'center',
      justifyContent: 'center',
    },
    app_title: {
      marginTop: 25,
      fontSize: 20,
      color: "#cc1b1b",
      fontWeight: "bold",
    },
    searchbar: {
      width: 320,
      marginTop: 20,
      marginBottom: 70, 
      height: 17,
    },
    restaurant: {
      margin: 5,
      padding: 10,
      backgroundColor: '#fff'
    },
    image: {
      width: 275,
      height: 200,
      display: "flex"
    },
    category: {
      alignItems: "center",
      overflow: "scroll",
    },
    category_title: {
      fontSize: 35,
      fontStyle: 'italic',
      fontWeight: 'bold',
    },
    restaurant_name: {
      textAlign: 'center',
      fontSize: 20,
      marginBottom: 5,
      fontStyle: 'italic'
    },
    restaurant_ratingContainer: {
      display: "flex",
      flexDirection: "column",
      margin: 10,
    },
    restaurant_review: {
      textAlign: 'center',
      fontWeight: "bold",
    },
    restaurant_rating: {
      textAlign: 'center',
      fontWeight: "bold",
    },
  });

export default Home;
