import React from 'react';
import Enzyme, {shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import MyComponent from './MyComponent';

Enzyme.configure({ adapter: new Adapter()})

describe('MyComponent', () => {
  it('should show text', () => {
    const wrapper = shallow(<MyComponent />);
    const text = wrapper.find('div div')
    expect(text.text()).toBe('Text goes here');
  })

  it('should hide when text button is clicked', () => {
    const wrapper = shallow(<MyComponent/>);
    const button = wrapper.find('button');
    button.simulate('click');
    const text = wrapper.find('div div');
    expect(text.length).toBe(0);
  })
})
