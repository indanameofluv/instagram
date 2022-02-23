import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native';
import { AntDesign, Entypo, FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import iconSet from '@expo/vector-icons/build/FontAwesome5';


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
        <TouchableOpacity 
            onPress={
                () => setActiveTab(icon.name)
            }
        >
            <Image 
                source={{uri: activeTab == icon.name ? icon.active : icon.inactive}} 
                style={[
                    styles.icon,
                     icon.name == 'Profile' ? styles.profilePic() : null,
                     activeTab == 'Profile' && icon.name == activeTab ? styles.profilePic(activeTab) : null,
                ]}
            />
        </TouchableOpacity>
    );
    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                {icons.map((icon: any, index: number) => (
                    <Icon  icon={icon} key={index}/>
                ))}
            </View>
        </View>
    );
}
//ここのiconとindexはなぜタイプの指定をしなくてはならないのか謎で仕方がないのである

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor: '#fff'
    },
    container: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        paddingTop: 10,
        paddingRight:20,
        paddingLeft: 20,
    },
    icon: {
        width: 30,
        height: 30,
    },
    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab == 'Profile' ? 2 : 0,
        borderColor: 'black',
    }),
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