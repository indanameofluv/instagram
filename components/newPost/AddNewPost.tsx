import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import FormikPostUploader from './FormikPostUploader';

const AddNewPost = ({navigation}: any) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <FormikPostUploader navigation={navigation}/>
        </View>
    );
}

const Header = ({navigation}: any) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor: 'grey',}}>
            <Image
                source={{
                    uri: 'https://img.icons8.com/ios-glyphs/90/000000/back.png'
                }}
                style={{ width: 30, height:30 }}
            />
        </TouchableOpacity>
        <Text style={styles.headerText}>New Post</Text>
        <Text></Text>
    </View>
);

//空のテキストを入れ、space-betweenを使えば、二つ目に書かれているコンポーネントは必然的に真ん中になる

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        marginRight: 25,
    },
});

export default AddNewPost