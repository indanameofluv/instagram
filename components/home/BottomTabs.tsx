import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native';
import { AntDesign, Entypo, FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';


export const BottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/material-rounded/452/home.png',
        inactive: 'https://img.icons8.com/material-outlined/452/home--v2.png',
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/452/search--v1.png',
        inactive: 'https://img.icons8.com/ios/452/search--v1.png',
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/452/instagram-reel.png',
        inactive: 'https://img.icons8.com/ios/452/instagram-reel.png',
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/ios-filled/344/shopping-bag.png',
        inactive: 'https://img.icons8.com/small/344/shopping-bag.png',
    },
    {
        name: 'Profile',
        active: 'https://i.pinimg.com/564x/71/ed/44/71ed44083a3ba2fe7f87e9e06254797f.jpg',
        inactive: 'https://i.pinimg.com/564x/71/ed/44/71ed44083a3ba2fe7f87e9e06254797f.jpg'
    },
]

const BottomTabs =({icons}: {icons: any}) => {
    const [activeTab, setActiveTab] = useState('Home');
    
    const Icon = ({icon}: {icon: any}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{uri: icon.inactive}} style={styles.icon}/>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            {icons.map((icon: any, index: number) => (
                <Icon  icon={icon} key={index}/>
            ))}
        </View>
    );
}
//ここのiconとindexはなぜタイプの指定をしなくてはならないのか謎で仕方がないのである

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        paddingTop: 20,
        paddingRight:20,
        paddingLeft: 20,
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 25,
    }
});

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     icon: {
//         width: 30,
//         height: 30,
//     },
// });

export default BottomTabs