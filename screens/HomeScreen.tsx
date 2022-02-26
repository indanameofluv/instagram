import React, {useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import {POSTS} from '../data/posts';
import BottomTabs, { BottomTabIcons } from '../components/home/BottomTabs';

// useEffect(() => {
//     window.scrollTo(0,0)
// }, []);

const HomeScreen = ({navigation}: any) => {
    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Header navigation={navigation}/>
                <Stories />
                <ScrollView>
                    {POSTS.map((post, index) => (
                        <Post post={post} key={index}/>
                    ))}
                </ScrollView> 
                <BottomTabs icons={BottomTabIcons} />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    }
});

export default HomeScreen