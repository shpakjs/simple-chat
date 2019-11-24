import React from 'react';
import ChatsView from '../components/Chats/Chats';
import { chatApi } from '../api/requests';
export default class Chats extends React.Component {
    state = {
        'chats': [],
        'userId': 2,
        'selectedChat': null,
        'messages': []
    }
    componentDidMount() {
        chatApi.getUserChats(2).then(chats => {
            this.setState({chats});
        });
    }
    getChatMessages = async(chatId, messagesCount, messagesOffset) => {
        let messages = await chatApi.getChatMessages(chatId, messagesCount, messagesOffset);
        this.setState({ selectedChat: chatId, messages: messages });
    }
    
    render () {
        return <ChatsView 
            chats={ this.state.chats } 
            getChatMessages={ this.getChatMessages } 
            messages={ this.state.messages } 
            userId={ this.state.userId }/>
    }
}