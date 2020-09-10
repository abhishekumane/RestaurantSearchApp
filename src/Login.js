import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome</Text>
            <Text style={styles.text2}>To My Restaurant App</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.button_text}>Enter Here</Text>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#A4A4A4',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 35,
        color: "#1F1F1F",
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text2: {
        fontSize: 25,
        color: "#1F1F1F",
     //   fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#FF0038",
        padding: 10,
        width: 150,
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000"
    },
    button_text: {
        fontWeight: "bold"
    }
  });

export default Login;
