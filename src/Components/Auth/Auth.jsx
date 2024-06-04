import React, { useState } from 'react';
import animations from './animations.module.css';
import LoginBanners from '../LoginBanners/LoginBanners';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import styles from '../LoginBanners/LoginBanners.module.css'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [animate, setAnimate] = useState(false);
  const isRTL = document.dir === 'rtl'; // Check if the current direction is RTL

  const handleToggle = () => {
    setAnimate(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setAnimate(false);
    }, 500); // Duration of the animation
  };

  return (
    <div className="flex overflow-x-hidden">
      <div className={`min-h-screen flex items-center justify-center w-1/2 ${animate ? (isLogin ? (isRTL ? animations.slideOutRightRTL : animations.slideOutLeft) : (isRTL ? animations.slideOutLeftRTL : animations.slideOutRight)) : (isLogin ? (isRTL ? animations.slideInLeftRTL : animations.slideInLeft) : (isRTL ? animations.slideInRightRTL : animations.slideInRight))}`}>
        {isLogin ? <LoginForm handleToggle={handleToggle} /> : <RegisterForm handleToggle={handleToggle} />}
        {/* <button onClick={handleToggle}>{isLogin ? 'Register' : 'Login'}</button> */}
      </div>
      <div className={`${styles.gallery} tttt w-1/2 relative bg-pink-50 h-screen shadow-md overflow-hidden ${animate ? (isLogin ? (isRTL ? animations.slideOutLeftRTL : animations.slideOutRight) : (isRTL ? animations.slideOutRightRTL : animations.slideOutLeft)) : (isLogin ? (isRTL ? animations.slideInRightRTL : animations.slideInRight) : (isRTL ? animations.slideInLeftRTL : animations.slideInLeft))}`}>
      <LoginBanners/>
      </div>
      
    </div>
  );
};

export default Auth;
