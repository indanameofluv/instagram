import { View,Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { isValidElement, useState } from 'react'

import { Formik } from 'formik';
import * as Yup from 'yup';
import validator from 'email-validator';
import { NavigationContainer } from '@react-navigation/native';

const SignupForm = ({navigation}: any) => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        password: Yup.string()
            .required()
            .min(8, 'Your password has to have at least 8 cahracters'),
    });

    // const GoToHomeScreen = () => navigation.navigate('HomeScreen')

  return (
    <View style={styles.wrapper}>

        <Formik
            initialValues={{email: '', username: '' ,password: ''}}
            onSubmit={values => {
                console.log(values)
                console.log('Your post was submitted successfully🎉')
            }}
            validationSchema={SignupFormSchema}
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
                                placeholder='Email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>

                        <View 
                            style={[
                                styles.inputField,
                                {
                                borderColor:
                                    1 > values.username.length || values.username.length >= 2
                                        ? '#ccc'
                                        : 'red'
                                },
                            ]}
                        >
                            <TextInput 
                                placeholderTextColor='#444'
                                placeholder='Username'
                                autoCapitalize='none'
                                textContentType='username'
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                        </View>

                        <View 
                            style={[
                                styles.inputField,
                                {
                                borderColor:
                                    1 > values.password.length || values.password.length >= 8
                                        ? '#ccc'
                                        : 'red'
                                },
                            ]}
                        >
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
                            <Text style={styles.buttonText}>Sign up</Text>
                        </Pressable>

                        <View style={styles.LoginContainer}>
                            <Text>Already have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.push('LoginScreen')}>
                                <Text style={{color: '#6BB0F5'}}> Login</Text>
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

    LoginContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    },
});

export default SignupForm