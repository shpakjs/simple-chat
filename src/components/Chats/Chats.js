import React from 'react';
import styles from './Chats.module.css';
import Chat from '../Chat/Chat';
import NewChat from '../NewChat/NewChat';
import Messages from '../Messages/Messages';

const Chats = (props) => {
    return (<div className={styles.chats__wrapper}>
        <div className={styles.chats}>
            <NewChat />
            {props.chats.map(chat => {
                return <Chat 
                    key = {chat.conversation.conversationId} 
                    getChatMessages = {props.getChatMessages}
                    chat = {chat.conversation} 
                    users = {chat.users}/>
            })}
        </div>
        <Messages messages = {props.messages} userId={props.userId}/>
    </div>);
}

export default Chats;