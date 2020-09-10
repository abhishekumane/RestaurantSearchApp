import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function Rosti() {
    return (
        <View style={styles.container}>
            <View style={styles.restaurant}>
                <Text style={styles.restaurant_name}>Rosti Tuscan Kitchen</Text>
                    <Image style={styles.image} source={{uri: 'https://s3-media0.fl.yelpcdn.com/bphoto/7wluVAQB7eoYlhMw7XJ93Q/o.jpg'}} />
                    <View style={styles.restaurant_ratingContainer}>
                        <Text style={styles.restaurant_rating}>Average Rating: 4.3</Text>
                        <Text style={styles.restaurant_review}>Number of Reviews: 935</Text>
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

export default Rosti;
