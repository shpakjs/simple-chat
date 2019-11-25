// Link.react.test.js
import React from 'react';
import Chat from './Chat';
import {create} from 'react-test-renderer';

describe("Chat component", () => {

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<Chat 
            id="2" 
            caption="I am test chat" 
            type="1" 
            isSelected="false" 
            onChatSelected={mockCallback}/>);
        let tree = component.toJSON();
        tree.props.onClick();
        expect(mockCallback.mock.calls.length).toBe(1);
    });

    test('Chat component changed on click', () => {
        const component = create(<Chat 
            id="2" 
            caption="I am test chat" 
            type="1" 
            isSelected="false" 
            onChatSelected={() => {}}/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        tree.props.onClick();
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });

});
