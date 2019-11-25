import React, { useEffect, useRef } from 'react';
import styles from './Messages.module.css';
import Message from '../Message/Message';
import NewMessage from '../NewMessage/NewMessage';


const Messages = ({messages, userId, chatId, allUsers, sendMessage}) => {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "auto" })
    }
    const messagesElements = messages.map(message => {
        return <Message 
        key = {message.id} 
        isMy={ userId === message.senderId } 
        sender={ allUsers[parseInt(message.senderId) - 1 ] && allUsers[parseInt(message.senderId) - 1 ].name} //Very rude decision, only for interface, in this case, better when API returns senderId and sender name
        {...message}/>
    });
    useEffect(scrollToBottom, [messagesElements]); //Effect to sroll messages to the latest one
    
    return (<div>
        {messagesElements}
        <div ref={ messagesEndRef } /> 
        { chatId && <NewMessage chatId={chatId} sendMessage={sendMessage}/> }
    </div>);
}

export default Messages;