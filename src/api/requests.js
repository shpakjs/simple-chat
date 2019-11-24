import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://assignment.bunq.com/',
    crossDomain: true
});

export const chatApi = {
    getUsers() {
        return instance.get(`users`)
        .then(response => {
            return response.data
        });
    },
    getUserById(userId) {
        return instance.get(`users/${userId}`)
        .then(response => {
            return response.data
        });
    },
    //Get all conversations for one user.
    getUserChats(userId) {
        return instance.get(`conversation/user/${userId}`)
        .then(response => {
            return response.data
        });
    },
    //Get last seen user timestamp by user and chat
    getUserLastSeenTime(chatId, userId) {
        return instance.get(`conversation/${chatId}/lastseen/${userId}`)
        .then(response => {
            return response.data
        });
    },
    //Get new messages array after some message 
    getNewMessagesAfterMessageId(chatId, messageId) {
        return instance.get(`conversation/${chatId}/new/${messageId}`)
        .then(response => {
            return response.data
        });
    },
    //Get chat details by Id 
    getChatDetails(chatId) {
        return instance.get(`conversation/${chatId}`)
        .then(response => {
            return response.data
        });
    },
    //Get part of messages from chat
    getChatMessages(chatId, messagesCount = 50, messagesOffset=0) {
        return instance.get(`conversation/${chatId}/message/limited?limit=${messagesCount}&offset=${messagesOffset}`)
        .then(response => {
            return response.data
        });
    },
    //Send a message
    sendMessage(chatId, senderId, messageText) {
        return instance.post(`conversation/${chatId}/message/send`, {senderId: senderId, message: messageText})
        .then(response => {
            return response.data
        });
    },
    //Create personal conversation
    createPersonalChat(users) {
        return instance.post(`conversation/personal`, {users})
        .then(response => {
            return response.data
        });
    },
    //Create a new group conversation
    createGroupChat(users, name) {
        return instance.post(`conversation/group`, {users, name})
        .then(response => {
            return response.data
        });
    },
    //Add new member of the group conversation
    addGroupChatMember(chatId, userId) {
        return instance.put(`conversation/${chatId}/seen/${userId}`)
        .then(response => {
            return response.data
        });
    },
    
}