import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { yupToFormErrors, Formik } from 'formik';
import * as Yup from 'yup';
import { Divider } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { NavigationContainer } from '@react-navigation/native';
import validUrl from 'valid-url';

const PLACEHOLDER_IMG = 'https://i.pinimg.com/564x/a4/a5/9c/a4a59c87d242eaca70355457bbb11a9f.jpg';

const UploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URl is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit.')
});

const FormikPostUploader = ({navigation}: any) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);

    return (
        <Formik
            initialValues={{caption: '', imageUrl: ''}}
            onSubmit={ values => {
                console.log(values)
                console.log('Your post was submitted successfully🎉')
                navigation.goBack()
            }}
            validationSchema={UploadPostSchema}
            validateOnMount={true}
        >
            {({ 
                handleBlur, 
                handleChange, 
                handleSubmit, 
                values, 
                errors, 
                isValid 
            }) => (
                <>
                    <View 
                        style={{ 
                            margin: 20, 
                            justifyContent: 'space-between', 
                            flexDirection: 'row' 
                        }}
                    >
                        <Image 
                            source={{
                                uri: validUrl.isUri(thumbnailUrl) 
                                    ?  thumbnailUrl
                                    : PLACEHOLDER_IMG
                            }} 
                            style={{width: 100, height: 100,}} 
                        />

                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <TextInput 
                                style={{ color: 'white', fontSize: 20 }}
                                placeholder='Write a caption ...' 
                                placeholderTextColor='grey'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                    </View>
                    <Divider width={0.2} orientation='vertical' />
                    <TextInput
                        onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
                        style={{color: 'white', fontSize: 18}}
                        placeholder='Enter Image Url' 
                        placeholderTextColor='grey'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: 'red' }}>
                            {errors.imageUrl}
                        </Text>
                    )}
                    <Button onPress={handleSubmit} title='Share' disabled={!isValid} color='white'/>
                </>
            )}
        </Formik>
    );
}

//onChange ={(e) => (e.nativeEvent)}の意味を後ほど理解する

export default FormikPostUploader