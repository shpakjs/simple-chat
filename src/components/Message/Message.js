import React from 'react';
import styles from './Message.module.css';

const Message = (props) => {
    return (
        <div className={styles.message__wrapper} >
            <div 
                id={props.id} 
                className = {`
                    ${styles.message} 
                    ${ props.isMy ? styles.my : '' }`}>
                <div className = {styles.message__info}>
                    <p className = {styles.author}>{props.sender}</p>
                    <div className = {styles.time}>{props.timestamp}</div>
                </div>
                {props.message}
            </div>
        </div>
    );
}
export default Message;