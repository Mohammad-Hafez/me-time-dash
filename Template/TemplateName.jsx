import React from 'react';
import styles from './TemplateName.module.css';
import { Helmet } from 'react-helmet';

const TemplateName = ({t}) => {
    return <>
        <Helmet>
            <title>
                {t('helmet.')}
            </title>
        </Helmet>
        <section className={styles.templateName}>

        </section>
    </>
};

export default TemplateName;
