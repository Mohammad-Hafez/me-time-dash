import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash, FaExclamationCircle } from 'react-icons/fa';
import floatingStyles from '../LoginForm/LoginForm.module.css';
import { CiLock } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { CiMobile3 } from "react-icons/ci";

const RegisterForm = ({ handleToggle, setRegisterSteps, t }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [showRepassword, setShowRepassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleRepasswordVisibility = () => {
        setShowRepassword(!showRepassword);
    };

    const phoneRegExp = /^(?:\+?962|0)7[0-9]\d{7}$/;

    const initialValues = {
        email: '',
        phone: '',
        password: '',
        repassword: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email(t('errors.email-Format')).required(t('errors.email-Required')),
        phone: Yup.number()
            .typeError(t('errors.phone-Number'))
            .required(t('errors.phone-Required'))
            .test(
                'phone-format',
                t('errors.phone-Format'),
                value => phoneRegExp.test(value)
            ),
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
        setRegisterSteps(true)
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
                        <div className="mb-3">
                            <div className={`${floatingStyles.floatingInput}`}>
                                <HiOutlineMail className='absolute top-1/2 -translate-y-1/2 ms-1 z-10 text-gray-300 text-base' />
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder=""
                                    className={`my-2 ps-6 border focus:ring focus:ring-opacity-50 ${formik.touched.email && formik.errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-200 text-red-600' : 'border-gray-300 focus:border-purple-500 focus:ring-purple-200 text-purple-900'}`}
                                />
                                <label htmlFor="email" className={`ps-2 ${formik.touched.email && formik.errors.email ? "text-red-500" : "text-purple-500"}`}>{t('register.email')}</label>
                                {formik.touched.email && formik.errors.email && (
                                    <FaExclamationCircle className="absolute end-2 top-5 text-red-500" />
                                )}
                            </div>
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-3">
                            <div className={`${floatingStyles.floatingInput}`}>
                                <CiMobile3 className='absolute top-1/2 -translate-y-1/2 ms-1 z-10 text-gray-400 text-base' />
                                <Field
                                    type="number"
                                    id="phone"
                                    name="phone"
                                    placeholder=""
                                    className={`my-2 ps-6 border focus:ring focus:ring-opacity-50 ${formik.touched.phone && formik.errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-200 text-red-600' : 'border-gray-300 focus:border-purple-500 focus:ring-purple-200 text-purple-900'}`}
                                />
                                <label htmlFor="phone" className={`ps-2 ${formik.touched.phone && formik.errors.phone ? "text-red-500" : "text-purple-500"}`}>{t('register.phone')}</label>
                                {formik.touched.phone && formik.errors.phone && (
                                    <FaExclamationCircle className="absolute end-2 top-5 text-red-500" />
                                )}
                            </div>
                            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-3">
                            <div className={`${floatingStyles.floatingInput}`}>
                                <CiLock className='absolute top-1/2 -translate-y-1/2 ms-1 z-10 text-gray-400 text-base' />
                                <Field
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder=""
                                    className={`my-2 ps-6 border focus:ring focus:ring-opacity-50 ${formik.touched.password && formik.errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-200 text-red-600' : 'border-gray-300 focus:border-purple-500 focus:ring-purple-200 text-purple-900'}`}
                                />
                                <label htmlFor="password" className={`ps-2 ${formik.touched.password && formik.errors.password ? "text-red-500" : "text-purple-500"}`}>{t('register.password')}</label>
                                <div className="icons flex items-center absolute inset-y-0 end-2 top-1/2 -translate-y-1/2 h-fit">
                                    <span className="cursor-pointer h-fit text-stone-500" onClick={togglePasswordVisibility}>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                    {formik.touched.password && formik.errors.password && (
                                        <FaExclamationCircle className="text-red-500 ms-2" />
                                    )}
                                </div>
                            </div>
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

                        </div>

                        <div className="mb-3">
                            <div className={`${floatingStyles.floatingInput}`}>
                                <CiLock className='absolute top-1/2 -translate-y-1/2 ms-1 z-10 text-gray-400 text-base' />

                                <Field
                                    type={showRepassword ? "text" : "password"}
                                    id="repassword"
                                    name="repassword"
                                    placeholder=""
                                    className={`my-2 ps-6 border focus:ring focus:ring-opacity-50 ${formik.touched.repassword && formik.errors.repassword ? 'border-red-500 focus:border-red-500 focus:ring-red-200 text-red-600' : 'border-gray-300 focus:border-purple-500 focus:ring-purple-200 text-purple-900'}`}
                                />
                                <label htmlFor="repassword" className={`ps-2 ${formik.touched.repassword && formik.errors.repassword ? "text-red-500" : "text-purple-500"}`}>{t('register.repassword')}</label>
                                <div className="icons flex items-center absolute inset-y-0 end-2 top-1/2 -translate-y-1/2 h-fit">
                                    <span className="cursor-pointer h-fit text-stone-500" onClick={toggleRepasswordVisibility}>
                                        {showRepassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                    {formik.touched.repassword && formik.errors.repassword && (
                                        <FaExclamationCircle className="text-red-500 ms-2" />
                                    )}
                                </div>
                            </div>
                            <ErrorMessage name="repassword" component="div" className="text-red-500 text-sm" />

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
