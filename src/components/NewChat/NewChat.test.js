import { TextField, Button, Dialog, RadioGroup } from '@material-ui/core';
import NewChat from './NewChat';

describe('NewChat ', () => {
    it('Textarea shouldn`t be rendered', () => {
        let wrapper = shallow(<NewChat allUsers={[]} /> );
        expect(wrapper.find(TextField)).toHaveLength(0);
    });
    it('Textarea should render when RadioGroup value is false', () => {
        let wrapper = shallow(<NewChat allUsers={[]} /> );
        wrapper.find(RadioGroup).simulate('change',
            { target: { value: 'false' } }
        );
        expect(wrapper.find(TextField)).toHaveLength(1);
    });
    
});