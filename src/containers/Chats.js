import React from 'react';
import ChatsView from '../components/Chats/Chats';
import { chatApi } from '../api/requests';
import { Redirect } from 'react-router-dom';

export default class Chats extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            'chats': [],
            'selectedChat': null
         };
        this.addNewChat = this.addNewChat.bind(this);
        this.selectChat = this.selectChat.bind(this);
    }
    componentDidMount() {
        chatApi.getUserChats(this.props.userId).then(chats =>  this.setState({ chats }));
    }

    selectChat(chatId) {
        this.setState({ selectedChat: chatId });
    }

    async addNewChat(isPrivate, name, users) {
        let usersWithCurrent = users + ',' + this.props.userId; //Current user by default in every chat he creates
        let newChat;
        if(isPrivate === 'true') {
            newChat = await chatApi.createPersonalChat(usersWithCurrent);
        } else {
            newChat = await chatApi.createGroupChat(usersWithCurrent, name);
        }
        let chats = await chatApi.getUserChats(this.props.userId);
        this.setState({ selectedChat: newChat.id, chats: chats });
    } 


    render () {
        if(!this.props.userId) {
            return <Redirect to={"/login"} />;
        }
        return <ChatsView 
            chats={ this.state.chats } 
            users={ this.props.users }
            userId={ this.props.userId }
            chatId= { this.state.selectedChat }
            selectChat = { this.selectChat }
            addNewChat = { this.addNewChat }
            onLogout = { this.props.onLogout }/>
    }
}