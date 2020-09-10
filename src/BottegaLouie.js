import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function BottegaLouie() {
    return (
        <View style={styles.container}>
            <View style={styles.restaurant}>
            <Text style={styles.restaurant_name}>Bottega Louie</Text>
                <Image style={styles.image} source={{uri: "https://cdn.vox-cdn.com/thumbor/uEI6K6h-MGHMC66Lv6w2PSZq5Ek=/0x0:1800x1350/920x613/filters:focal(0x0:1800x1350)/cdn.vox-cdn.com/uploads/chorus_image/image/49926111/BL_RESTAURANT.0.0.jpg"}} />
                <View style={styles.restaurant_ratingContainer}>
                    <Text style={styles.restaurant_rating}>Average Rating: 4.7</Text>
                    <Text style={styles.restaurant_review}>Number of Reviews: 16928</Text>
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

export default BottegaLouie;
