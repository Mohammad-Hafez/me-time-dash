import React from 'react';
import styles from './StaffMembers.module.css';
import { Helmet } from 'react-helmet';

const StaffMembers = ({t}) => {
    return <>
        <Helmet>
            <title>
                {t('')}
            </title>
        </Helmet>
        <div className={styles.staffMembers}>

        </div>
    </>
};

export default StaffMembers;
