import React from 'react';
import MessagesView from '../components/Messages/Messages';
import { chatApi } from '../api/requests';
import Preloader from '../components/Preloader/Preloader';

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            'messages': []
         };
        this.sendMessage = this.sendMessage.bind(this);
    }
    componentWillMount() {
        chatApi.getChatMessages(this.props.chatId, 100, 0).then(messages => {
            this.setState({ messages: [...messages.reverse()] });
        });
    }

    componentDidUpdate(prevProps) {
        if(prevProps.chatId !== this.props.chatId){
            chatApi.getChatMessages(this.props.chatId, 100, 0).then(messages => {
                this.setState({ messages: [...messages.reverse()] });
            });
        }
    }
    getChatMessages(){
        chatApi.getChatMessages(this.props.chatId, 100, 0).then(messages => {
            this.setState({ messages: [...messages.reverse()] });
        });
    }
    async sendMessage(messageText, chatId) {
        await chatApi.sendMessage(chatId, this.props.userId, messageText);
        let newMessage = await chatApi.getChatMessages(chatId, 1, 0);
        this.setState({messages: [...this.state.messages, newMessage[0]]})
    }


    render () {
        return this.props.chatId 
        ? <MessagesView 
            messages={ this.state.messages } 
            userId={ this.props.userId }
            sendMessage= { this.sendMessage }
            chatId= { this.props.chatId }
            allUsers = { this.props.allUsers }/>
        : <Preloader />
    }
}