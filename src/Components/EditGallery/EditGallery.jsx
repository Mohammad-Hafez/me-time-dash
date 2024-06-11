import React from 'react';
import styles from './EditGallery.module.css';
import { Helmet } from 'react-helmet';

const EditGallery = ({t}) => {
    return <>
        <Helmet>
            <title>
                {t('')}
            </title>
        </Helmet>
        <div className={styles.editGallery}>

        </div>
    </>
};

export default EditGallery;
