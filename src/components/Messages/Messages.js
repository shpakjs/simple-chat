import React from 'react';
import styles from './Messages.module.css';
import Message from '../Message/Message';
import NewMessage from '../NewMessage/NewMessage';

const Messages = ({messages, userId}) => {
    return (<div className={styles.messages}>
        {messages.map(message => <Message key = {message.id} userId={userId} {...message}/>)}
        < NewMessage />
    </div>);
}

export default Messages;