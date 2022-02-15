import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
           <TouchableOpacity>
            <Image
              style={styles.logo} 
              source={require('../../assets/logo.png')} 
            />
           </TouchableOpacity>

           <View style={styles.iconsContainer}>
            <TouchableOpacity>
                <Image
                    style={styles.icon}
                    source={require('../../assets/plus-square.png')} 
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={styles.icon}
                    source={require('../../assets/love.png')} 
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={styles.icon}
                    source={require('../../assets/message.png')} 
                />
            </TouchableOpacity>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    logo:{
        width: 140,
        height: 75,
        resizeMode: 'contain',
    },
    icon: {
        width: 28,
        height: 28,
        marginLeft: 10,
        marginRight: 16,
        resizeMode: 'contain',
    }
});

//plus-square and message mustn't be svg's but only png's, maybe.