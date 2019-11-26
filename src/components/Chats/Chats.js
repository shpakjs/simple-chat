import React from 'react';
import styles from './Chats.module.css';
import Chat from '../Chat/Chat';
import NewChat from '../NewChat/NewChat';
import logo from '../../assets/logo.png';
import ChatRoom from '../ChatRoom/ChatRoom';
import {getChatCaption} from '../../utils/utils';

const Chats = (props) => {
    
    const usersForSelector = props.users.filter(user => user.id !== props.userId); //All users besides current user

    return (<div className={styles.chats__wrapper}>
        <div className={styles.chats}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>
            <NewChat  addNewChat={ props.addNewChat } allUsers={ usersForSelector }/>
            {props.chats.map(chat => {
                return <Chat 
                    key = { chat.conversation.conversationId } 
                    onChatSelected = { props.selectChat }
                    id = { chat.conversation.conversationId }
                    caption = { getChatCaption(chat, props.users) }
                    type= { chat.conversation.type }
                    isSelected = {chat.conversation.conversationId === props.chatId }/>
            })}
        </div>
        { props.chatId && <ChatRoom
            chatInfo = { props.chats.find(chat => props.chatId === chat.conversation.conversationId)}
            allUsers = { props.users }
            userId={props.userId}/> }
    </div>);
}

export default Chats;