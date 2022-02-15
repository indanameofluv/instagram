import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import Header from '../components/home/Header';

export default function HomeScreen() {
    return(
        <SafeAreaView style={styles.container}>
            <Header />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    }
});