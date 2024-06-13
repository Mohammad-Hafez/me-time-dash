import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './CreateBusinessName.module.css';
import floatingStyles from '../LoginForm/LoginForm.module.css';

const CreateBusinessName = ({ t , next}) => {
    const initialValues = {
        businessName: '',
    };

    const validationSchema = Yup.object({
        businessName: Yup.string()
            .required(t('errors.businessName-Required'))
            .min(2, t('errors.businessName-TooShort'))
            .max(50, t('errors.businessName-TooLong')),
    });

    const onSubmit = (values, { setSubmitting }) => {
        next()
        console.log('Form data', values);
        setSubmitting(false);
        // Perform further actions like API calls or state updates
    };

    return (
        <section className={styles.createBusinessName}>
            <div className="container">
                <h2 className='text-purple-900 font-semibold text-2xl'>
                    {t('register.BusinessScreen.header')}
                </h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {formik => (
                        <Form>
                            <div className={`${floatingStyles.floatingInput}`}>
                                <Field
                                    className='my-2 ps-6 border focus:ring focus:ring-opacity-50'
                                    type="text"
                                    name='businessName'
                                    id='businessName'
                                    placeholder=''
                                />
                                <label htmlFor="businessName" className='z-0'>{t('register.BusinessScreen.label')}</label>
                                <ErrorMessage name="businessName" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className='mt-4'>
                                <button
                                    type="submit"
                                    disabled={!formik.isValid || formik.isSubmitting}
                                    className="text-sm md:text-base  w-full py-2 px-4 bg-purple-800 hover:bg-purple-600 disabled:bg-purple-400 text-white font-semibold rounded-md"
                                >
                                    {t('buttons.continue')}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
};

export default CreateBusinessName;
