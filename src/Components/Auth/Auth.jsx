import React, { useState } from 'react';
import animations from './animations.module.css';
import LoginBanners from '../LoginBanners/LoginBanners';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import styles from '../LoginBanners/LoginBanners.module.css'
import { Helmet } from 'react-helmet';
import CompleteRegistration from '../CompleteRegistration/CompleteRegistration';
import { useTranslation } from 'react-i18next';

const Auth = () => {
    let { t } = useTranslation()
    const [isLogin, setIsLogin] = useState(true);
    const [animate, setAnimate] = useState(false);
    const [registerSteps, setRegisterSteps] = useState(false);

    const isRTL = document.dir === 'rtl';

    const handleToggle = () => {
        setAnimate(true);
        setTimeout(() => {
            setIsLogin(!isLogin);
            setAnimate(false);
        }, 500);
    };

    return <>
        <Helmet>
            <title>
                {isLogin ? t('helmet.login') : t('helmet.register')}
            </title>
        </Helmet>
        <div className="flex overflow-x-hidden flex-col md:flex-row">
            <div className={` min-h-screen flex items-center justify-center w-full md:w-1/2 
            ${registerSteps && "flex-col bg-slate-50 justify-around px-5"}
            ${isLogin ? "-order-1" : "order-1"} 
            ${animate ? (isLogin ? (isRTL ? animations.slideOutRightRTL : animations.slideOutLeft) :
                    (isRTL ? animations.slideOutLeftRTL : animations.slideOutRight)) :
                    (isLogin ? (isRTL ? animations.slideInLeftRTL : animations.slideInLeft) :
                        (isRTL ? animations.slideInRightRTL : animations.slideInRight))}
            `}
            >
                {registerSteps ? <CompleteRegistration t={t} /> :
                    isLogin ? <LoginForm handleToggle={handleToggle} t={t} /> :
                        <RegisterForm setRegisterSteps={setRegisterSteps} handleToggle={handleToggle} t={t} />}
            </div>
            <div className={`w-full md:w-1/2 relative bg-pink-50 h-screen shadow-md overflow-hidden 
            ${!isLogin ? styles.galleryL : styles.galleryR}  
            ${animate ? (isLogin ? (isRTL ? animations.slideOutLeftRTL : animations.slideOutRight) :
                    (isRTL ? animations.slideOutRightRTL : animations.slideOutLeft)) :
                    (isLogin ? (isRTL ? animations.slideInRightRTL : animations.slideInRight) :
                        (isRTL ? animations.slideInLeftRTL : animations.slideInLeft))}
            `}
            >
                <LoginBanners />
            </div>
        </div>
    </>;
};

export default Auth;
