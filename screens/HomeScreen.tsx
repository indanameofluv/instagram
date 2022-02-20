import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import {POSTS} from '../data/posts';

const HomeScreen = () => {
    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Header />
                <Stories />
                <ScrollView>
                    {POSTS.map((post, index) => (
                        <Post post={post} key={index}/>
                    ))}
                </ScrollView> 
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