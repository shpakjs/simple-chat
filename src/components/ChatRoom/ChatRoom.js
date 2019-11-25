import React from 'react';
import styles from './ChatRoom.module.css';
import Messages from '../../containers/Messages';


const ChatRoom = (props) => {
    const chatMembers = props.chatInfo.users.reduce((names, chatUser) => {
        let member = props.allUsers.find(user => user.id === chatUser.userid);
        return names + member.name + ', ';  // rude decision, kno
    }, []);

    return (<div className={styles.room}>
        <div className={styles.header}>
            <h3 className={styles.name}>{ props.chatInfo.conversation.name }</h3>
            <span className={styles.members}>{ chatMembers }</span>
        </div>
        { props.chatInfo && <Messages 
            userId={props.userId}
            chatId={props.chatInfo.conversation.conversationId}
            allUsers={props.allUsers}/> }
    </div>);
}

export default ChatRoom;