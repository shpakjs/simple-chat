import { TextField, RadioGroup, Select } from '@material-ui/core';
import {create} from 'react-test-renderer';
import NewChat from './NewChat';
const mockUsers = [
    {"id": 1, "name": "Will"},
    {"id": 2, "name": "Mike"},
    {"id": 3, "name": "Lucas"},
    {"id": 4, "name": "Dusin"}
];
describe('NewChat ', () => {
    it('Textarea shouldn`t be rendered when state.isPrivate value is true', () => {
        let wrapper = shallow(<NewChat allUsers={[]} /> );
        expect(wrapper.find(TextField)).toHaveLength(0);
        expect(wrapper.state('isPrivate')).toEqual('true');
    });
    it('Textarea should render when RadioGroup value is false', () => {
        let wrapper = shallow(<NewChat allUsers={[]} /> );
        wrapper.find(RadioGroup).simulate('change',
            { target: { value: 'false' } }
        );
        expect(wrapper.find(TextField)).toHaveLength(1);
    });
    
    it('onAddChat function should call function from props', () => {
        const clickFn = jest.fn();
        const component = create(<NewChat allUsers={[]} addNewChat={clickFn}/> );
        const instance = component.getInstance();
        instance.onAddChat();
        expect(clickFn).toHaveBeenCalled();
    });
    it('State.users must change correctly on Select change', () => {
        let component = shallow(<NewChat allUsers={mockUsers} /> );
        component.find(Select).simulate('change',
            { target: { value: [1,2] } }
        );
        expect(component.state('users')).toEqual('1,2');
      });
});