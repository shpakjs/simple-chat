import React from 'react';
import styles from './NewMessage.module.css';

const NewMessage = (props) => {
    return <form onSubmit={props.handleSubmit} className={styles.new__message}>
        <textarea name="message" placeholder="Enter whatever you want to say"/>
        <button>Send</button>
    </form>;
}
export default NewMessage;