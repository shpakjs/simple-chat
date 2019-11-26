import Chats from './Chats';
import ChatRoom from '../ChatRoom/ChatRoom';
import Chat from '../Chat/Chat';
import {create} from 'react-test-renderer';

describe('<Chats /> rendering', () => {
    const mockChats = [
        {
            "conversation":{"id":"1","conversationId":"1","is_owner":"0","userid":"1","status":null,"lastseen":"2019-11-11 07:29:22","name":null,"type":null},
            "users":[]
        },
        {
            "conversation":{"id":"4","conversationId":"4","is_owner":"0","userid":"1","status":"1","lastseen":"2019-11-05 10:10:50","name":"Group Chaaat","type":"2"},
            "users":[
                {"id":"31","conversationId":"4","is_owner":"0","userid":"1","status":null,"lastseen":"2019-11-05 10:10:50"},
                {"id":"32","conversationId":"4","is_owner":"0","userid":"2","status":null,"lastseen":"2019-01-25 11:49:01"},
                {"id":"33","conversationId":"4","is_owner":"0","userid":"3","status":null,"lastseen":null},
                {"id":"34","conversationId":"4","is_owner":"0","userid":"4","status":null,"lastseen":null}]
        }];
    const mockUsers = [
        {"id": 1, "name": "Will"},
        {"id": 2, "name": "Mike"},
        {"id": 3, "name": "Lucas"},
        {"id": 4, "name": "Dusin"}
    ];    
    const wrapper = shallow(<Chats 
        chats= {mockChats}
        users= {mockUsers}
        userId= {2}
        chatId= {null}
        selectChat={() => {}}
        addNewChat={() => {}} /> );

    it('shouldn`t render a ChatRoom when chat wasn`t selected', () => {
        expect(wrapper.find(ChatRoom)).toHaveLength(0);
    });

    it('Chats length have to match length of mockChats array', () => {
        expect(wrapper.find(Chat)).toHaveLength(mockChats.length);
    });
});