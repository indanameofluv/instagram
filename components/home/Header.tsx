import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


export default function Header({navigation}: any) {
    return (
        <View style={styles.container}>
           <TouchableOpacity>
            <Image
              style={styles.logo} 
              source={require('../../assets/logo.png')}
            />
           </TouchableOpacity>

           <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('NewPostScreen')}>
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
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>11</Text>
                </View>
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
    },
    unreadBadge: {
        backgroundColor: 'red',
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        zIndex: 100,
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: '600',
    },
});

//plus-square and message mustn't be svg's but only png's, maybe.