import React from 'react';
import styles from './EditBusinessInfo.module.css';
import { Helmet } from 'react-helmet';

const EditBusinessInfo = ({t}) => {
    return <>
        <Helmet>
            <title>
                {t('')}
            </title>
        </Helmet>
        <div className={styles.editBusinessInfo}>

        </div>
    </>
};

export default EditBusinessInfo;
