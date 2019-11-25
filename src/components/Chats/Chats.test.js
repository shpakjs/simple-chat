import Chats from './Chats';
import ChatRoom from '../ChatRoom/ChatRoom';
let wrapper, props;

function createTestProps(props) {
    return {
        chats: [],
        users: [],
        userId: 2,
        chatId: null,
        selectChat:() => {},
        addNewChat:() => {},
        ...props,
    };
}

beforeEach(() => {
    props = createTestProps();
    wrapper = shallow(<Chats {...props} /> );
});
describe('<Chats /> rendering', () => {
    it('shouldn`t render a <ChatRoom /> when chat wasn`t selected', () => {
        expect(wrapper.find(ChatRoom)).toHaveLength(0);
    });

});