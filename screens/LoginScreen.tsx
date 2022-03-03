import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import LoginForm from '../components/login/LoginForm';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const INSTAGRAM_LOGO =
    'https://img.icons8.com/color/452/instagram-new--v1.png';

const LoginScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
          <Image source={{ uri: INSTAGRAM_LOGO, height: 150, width: 150 }} />
      </View>
      <LoginForm navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
});

export default LoginScreen