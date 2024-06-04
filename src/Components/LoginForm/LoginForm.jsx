import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { FaEye, FaEyeSlash, FaExclamationCircle } from 'react-icons/fa';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';

const LoginForm = ({handleToggle}) => {
    let { t } = useTranslation();



    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email(t('errors.email-Format')).required(t('errors.email-Required')),
        password: Yup.string().required(t('errors.password-Required')).min(8, t('errors.password-Format'))
    });

    const onSubmit = (values, { setSubmitting }) => {
        console.log('Form data', values);
        setSubmitting(false);
    };

    return (
            <div className="w-full max-w-xl">
                <h1 className="text-2xl text-purple-800 font-semibold mb-6 text-center">{t('login.header')}</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {formik => (
                        <Form>
                            <div className={`${styles.floatingInput} mb-4`}>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder=""
                                    className={`mt-1 block w-full p-2 border rounded-md outline-none ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50`}
                                />
                                <label htmlFor="email" className="block text-gray-700">{t('register.email')}</label>
                                {formik.touched.email && formik.errors.email && (
                                    <FaExclamationCircle className="absolute end-2 top-5 text-red-500 " />
                                )}
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className={`${styles.floatingInput} mb-2 relative`}>
                                <Field
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder=""
                                    className={`mt-1 block w-full p-2 border rounded-md outline-none ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'} focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50`}
                                />
                                <label htmlFor="password">{t('register.password')}</label>
                                <div className="icons flex align-content-center absolute inset-y-0 end-2 top-5">
                                    <div className="flex items-center cursor-pointer h-fit text-stone-500" onClick={togglePasswordVisibility}>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </div>
                                    {formik.touched.password && formik.errors.password && (
                                        <FaExclamationCircle className="text-red-500 ms-2" />
                                    )}
                                </div>
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className='mb-6 text-end'>
                                <Link className='text-gray-400' to={'/forgetPassword'}>{t('login.forgetPassword')}</Link>
                            </div>
                            <div className='mb-4'>
                                <button
                                    type="submit"
                                    disabled={!formik.isValid || formik.isSubmitting}
                                    className="text-sm md:text-base lg:text-lg xl:text-xl w-full py-2 px-4 bg-purple-800 hover:bg-purple-600 disabled:bg-purple-400 text-white font-semibold rounded-md"
                                >
                                    {t('buttons.login')}
                                </button>
                            </div>
                            <div className="checkAccount text-center">
                                <p className='text-lg font-medium text-gray-500'>
                                    {t('login.checkAcc')} <span className='text-purple-800 font-semibold cursor-pointer' onClick={handleToggle}>{t('buttons.signup')}</span>
                                </p>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
    );
};

export default LoginForm;

