import React from 'react';
import styles from './Preloader.module.css';
import preloader from '../../assets/preloader.gif';

const Preloader = () => {
    return (
        <div className={styles.preloader} >
            <img src={preloader} />
        </div>
    );
}
export default Preloader;