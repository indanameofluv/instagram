import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import { USERS } from "../../data/users";

const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
                {USERS.map((story, index) => (
                    <TouchableOpacity key={index} style={{ alignItems: 'center' }}>
                        <Image source={{ uri: story.image }} style={styles.story} />
                        <Text>{
                            story.user.length > 11 
                            ? story.user.slice(0 ,10).toLowerCase() + '...' 
                            : story.user.toLowerCase()}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    story: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginLeft:10,
        marginRight: 10,
        borderWidth: 3,
        borderColor: '#ff8501'
    },
});

export default Stories