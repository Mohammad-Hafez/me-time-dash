import React from 'react';
import styles from './BusinessDetails.module.css';
import { Helmet } from 'react-helmet';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Gallery from '../Gallery/Gallery';

const BusinessDetails = ({t}) => {
    return <>
        <Helmet>
            <title>
                {t('helmet.businessDetails')}
            </title>
        </Helmet>
        <section className={styles.businessDetails}>
            <h2>{t('businessDetails.header')}</h2>
            <BusinessInfo t={t}/>
            <Gallery t={t}/>
        </section>
    </>
};

export default BusinessDetails;
