import React from 'react';
import styles from './EditBusinessDetails.module.css';
import { Helmet } from 'react-helmet';

const EditBusinessDetails = ({t}) => {
    return <>
        <Helmet>
            <title>
                {t('')}
            </title>
        </Helmet>
        <div className={styles.editBusinessDetails}>

        </div>
    </>
};

export default EditBusinessDetails;
