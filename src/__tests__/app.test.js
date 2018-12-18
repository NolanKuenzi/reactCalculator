import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { Calc } from '../app.js';

describe('<Calc /> Component', () => {
  it('Renders a <div />', () => {
      const wrapper = shallow(<Calc />);
      expect(wrapper.exists()).toBe(true);
  });
  
  test('event.preventDefault gets called when the form is submitted', () => { 
      const wrapper = mount(<Calc />);
      let prevented = false;
      wrapper.find('input').simulate('submit', {
        preventDefault: () => {
          prevented = true;
        }
      });
      expect(prevented).toBe(true);
  });
    
  test('this.allClear clears the input onClick', () => {
      const wrapper = mount(<Calc />);
      wrapper.find('#divisionSign').simulate('click');
      expect(wrapper.state('input')).toBe('/');
      wrapper.find('#ac').simulate('click');
      expect(wrapper.state('input')).toBe('')
  });
    
  test('this.del erases last character in input', () => {
      const wrapper = mount(<Calc />);
      wrapper.find('#divisionSign').simulate('click');
      wrapper.find('#divisionSign').simulate('click');
      expect(wrapper.state('input')).toBe('//');
      wrapper.find('#del').simulate('click');
      expect(wrapper.state('input')).toBe('/');
    });
  
  test('this.plusMinus adds a "+" or "-" sign', () => {
      const wrapper = mount(<Calc />);
      wrapper.find('#plusMinus').simulate('click');
      expect(wrapper.state('input')).toBe('-'); 
  });

  test('this.handleInput adds the button\'s value to input', () => {
      const wrapper = mount(<Calc />);
      wrapper.find('#divisionSign').simulate('click');
      expect(wrapper.state('input')).toBe('/');
  });

  test('this.solve solves the input or outputs "syntax error" if the input is invalid', () => {
      const wrapper = mount(<Calc />);
      wrapper.find('#forTestingOne').simulate('click');
      wrapper.find('#forTestingPlus').simulate('click');
      wrapper.find('#forTestingOne').simulate('click');
      wrapper.find('#equals').simulate('click');
      expect(wrapper.state('input')).toBe('2');
      wrapper.find('#divisionSign').simulate('click');
      wrapper.find('#equals').simulate('click');
      expect(wrapper.state('input')).toBe('Syntax Error');
  });
});
