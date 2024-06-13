import React from 'react';
import styles from './SetBusinessInfo.module.css';

const SetBusinessInfo = ({t}) => {
    return <>
        <section className={styles.setBusinessInfo}>
            <h1>{t('register.businessInfo.header')} </h1>
        </section>
    </>
};

export default SetBusinessInfo;
