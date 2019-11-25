import React from 'react';
import styles from './Chat.module.css';
import publicChat from '../../assets/public.png';
import privateChat from '../../assets/private.png';

const Chat = ({ id, caption, type, isSelected, onChatSelected }) => {
    return (
        <div className={`${styles.chat} ${type === "1" ? styles.private: ''} ${isSelected ? styles.active : '' }`}
            id = {id} 
            onClick = { () => onChatSelected(id) }>
                <img className={ styles.photo } src={ type === "2" ? publicChat : privateChat  } alt="user" />
                <span className={ styles.name }>{ caption }</span>
        </div>
    );
}
export default Chat;