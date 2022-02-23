import React, { useState } from 'react';
import { View, Text, ShadowPropTypesIOS } from 'react-native';
import { yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import { Formik } from 'formik';

const PLACEHOLDER_IMG = 'https://i.pinimg.com/564x/4d/5a/72/4d5a7258e7a92930515c5db248825723.jpg';

const UploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URl is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit.')
});

const FormikPostUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);

    return (
        <Formik
            initialValues={{caption: '', imageUrl: ''}}
            onSubmit={(values) => console.log(values)}
            validationSchema={UploadPostSchema}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => }
        </Formik>
    );
}

export default FormikPostUploader