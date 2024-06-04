import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { FaEye, FaEyeSlash, FaExclamationCircle } from 'react-icons/fa';
import floatingStyles from '../LoginForm/LoginForm.module.css';

const RegisterForm = ({handleToggle}) => {
    let { t } = useTranslation();

    const [showPassword, setShowPassword] = useState(false);
    const [showRepassword, setShowRepassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleRepasswordVisibility = () => {
        setShowRepassword(!showRepassword);
    };

    const initialValues = {
        email: '',
        phone: '',
        password: '',
        repassword: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email(t('errors.email-Format')).required(t('errors.email-Required')),
        phone: Yup.string()
            .required(t('errors.phone-Required'))
            .matches(/^(?:\+962|0)7[789]\d{7}$/, t('errors.phone-Format')), // Jordanian phone number format with country code
        password: Yup.string()
            .required(t('errors.password-Required'))
            .min(8, t('errors.password-Format')),
        repassword: Yup.string()
            .oneOf([Yup.ref('password'), null], t('errors.repassword-Format'))
            .required(t('errors.repassword-Required')),
    });

    const onSubmit = (values, { setSubmitting }) => {
        console.log('Form data', values);
        setSubmitting(false);
    };

    return (
            <div className="w-full max-w-xl">
                <h1 className="text-2xl text-purple-800 font-semibold mb-6 text-center">{t('register.header')}</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {formik => (
                        <Form>
                            <div className={`${floatingStyles.floatingInput} mb-4`}>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder=""
                                    className={`mt-1 block w-full p-2 border rounded-md outline-none ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50`}
                                />
                                <label htmlFor="email" className="block text-gray-700">{t('register.email')}</label>
                                {formik.touched.email && formik.errors.email && (
                                    <FaExclamationCircle className="absolute end-2 top-5 text-red-500" />
                                )}
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className={`${floatingStyles.floatingInput} mb-4`}>
                                <Field
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder=""
                                    className={`mt-1 block w-full p-2 border rounded-md outline-none ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50`}
                                />
                                <label htmlFor="phone" className="block text-gray-700">{t('register.phone')}</label>
                                {formik.touched.phone && formik.errors.phone && (
                                    <FaExclamationCircle className="absolute end-2 top-5 text-red-500" />
                                )}
                                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className={`${floatingStyles.floatingInput} mb-6 relative`}>
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
                            <div className={`${floatingStyles.floatingInput} mb-6 relative`}>
                                <Field
                                    type={showRepassword ? "text" : "password"}
                                    id="repassword"
                                    name="repassword"
                                    placeholder=""
                                    className={`mt-1 block w-full p-2 border rounded-md outline-none ${formik.touched.repassword && formik.errors.repassword ? 'border-red-500' : 'border-gray-300'} focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50`}
                                />
                                <label htmlFor="repassword">{t('register.repassword')}</label>
                                <div className="icons flex align-content-center absolute inset-y-0 end-2 top-5">
                                    <div className="flex items-center cursor-pointer h-fit text-stone-500" onClick={toggleRepasswordVisibility}>
                                        {showRepassword ? <FaEyeSlash /> : <FaEye />}
                                    </div>
                                    {formik.touched.repassword && formik.errors.repassword && (
                                        <FaExclamationCircle className="text-red-500 ms-2" />
                                    )}
                                </div>
                                <ErrorMessage name="repassword" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className='mb-4'>
                                <button
                                    type="submit"
                                    disabled={!formik.isValid || formik.isSubmitting}
                                    className="text-sm md:text-base lg:text-lg xl:text-xl w-full py-2 px-4 bg-purple-800 hover:bg-purple-600 disabled:bg-purple-400 text-white font-semibold rounded-md"
                                >
                                    {t('buttons.signup')}
                                </button>
                            </div>
                            <div className="checkAccount text-center">
                                <p className='text-lg font-medium text-gray-500'>
                                    {t('register.checkAcc')} <span onClick={handleToggle} className='text-purple-800 font-semibold cursor-pointer' >{t('buttons.login')}</span>
                                </p>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
    );
};

export default RegisterForm;
