import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const DATA = require('./getRestaurantsAPI.json').response[2].restaurantList[0]

function Fishermans() {
    return (
        <View style={styles.container}>
            <View style={styles.restaurant}>
                <Text style={styles.restaurant_name}>{DATA.name}</Text>
                <Image style={styles.image} source={{uri: DATA.imageUrl}} />
                <View style={styles.restaurant_ratingContainer}>
                    <Text style={styles.restaurant_rating}>Average Rating: {DATA.rating}</Text>
                    <Text style={styles.restaurant_review}>Number of Reviews: {DATA.review}</Text>
                </View>
            </View>
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
    restaurant: {
      margin: 5,
      padding: 10,
      backgroundColor: '#fff'
    },
    image: {
        width: 325,
        height: 250,
        display: "flex"
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


export default Fishermans;
