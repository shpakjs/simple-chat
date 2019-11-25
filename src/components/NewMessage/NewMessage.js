import React from 'react';
import styles from './NewMessage.module.css';

class NewMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.handleMessageSend = this.handleMessageSend.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }
    handleMessageSend() {
        this.props.sendMessage(this.state.text, this.props.chatId);
        this.setState({ text: '' });
    }
    handleMessageChange(event) {
        this.setState({ text: event.target.value });
    }
    render() {
        return <div className={styles.new__message}>
            <textarea name="message" value={this.state.text} onChange={event => this.handleMessageChange(event)} placeholder="Enter whatever you want to say"/>
            <button onClick={this.handleMessageSend}>Send</button>
        </div>;
    }

}
export default NewMessage;