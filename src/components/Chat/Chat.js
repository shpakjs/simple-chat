import React from 'react';
import styles from './Chat.module.css';
import user from '../../assets/user.png'

const Chat = ({getChatMessages, chat, users}) => {
    const onChatSelected = function() {
        getChatMessages(chat.id, 100, 0);
    }
    return (
        <div className={styles.chat}
            id = {chat.id} 
            onClick = { onChatSelected }>
                <img className={ styles.user__photo } src={user} alt="user" />
                <span className={ styles.chat__name }>{ chat.name }</span>
        </div>
    );
}
export default Chat;