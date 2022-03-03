import { View,Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native'
import React, { isValidElement, useState } from 'react'
import firebase from '../../firebase';

import { Formik } from 'formik';
import * as Yup from 'yup';
import validator from 'email-validator';
import { NavigationContainer } from '@react-navigation/native';

const LoginForm = ({navigation}: any) => {
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string()
            .required()
            .min(8, 'Your password has to have at least 8 cahracters'),
    });

    const onLogin = async (email:any, password: any) => {
        try{
            await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log('🔥 Firebase Login Successful ✅', email, password)
        } catch(error: any) {
            Alert.alert(error.message)
        }
    }

    // const GoToHomeScreen = () => navigation.navigate('HomeScreen');

  return (
    <View style={styles.wrapper}>

        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => {
                onLogin(values.email, values.password)
            }}
            validationSchema={LoginFormSchema}
            validateOnMount={true}
        >
                {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
                    <>
                        <View style={[styles.inputField,
                            {
                                borderColor: 
                                    values.email.length < 1 || validator.validate(values.email) 
                                        ? '#ccc'
                                        : 'red'
                            },
                        ]}>
                            <TextInput 
                                placeholderTextColor='#444'
                                placeholder='Phone Number, username or email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <View style={[styles.inputField,
                            {
                                borderColor:
                                    1 > values.password.length || values.password.length >= 8
                                        ? '#ccc'
                                        : 'red'
                            },
                        ]}>
                            <TextInput 
                                placeholderTextColor='#444'
                                placeholder='Password'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', marginBottom: 30}}>
                            <Text style={{color: '#6BB0F5'}}>Forgot password?</Text>
                        </View>

                        <Pressable 
                            titleSize={20} 
                            style={styles.button(isValid)} 
                            onPress={handleSubmit}
                        >
                            <Text style={styles.buttonText}>Log In</Text>
                        </Pressable>

                        <View style={styles.signupContainer}>
                            <Text>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
                                <Text style={{color: '#6BB0F5'}}> Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
        </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },

    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
    },

    button: (isValid: any) => ({
            backgroundColor: isValid ? '#0096F6': '#9ACAF7',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 42,
            borderRadius: 4 
    }),

    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
        opacity: 0.8,
    },

    signupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 105,
    },
});

export default LoginForm