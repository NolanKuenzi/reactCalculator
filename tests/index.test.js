import React from 'react';
import Enzyme, { shallow } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
import { Calc } from '../src/index.js';


describe('<Calc /> Component', () => {
    it('Renders a <div />', () => {
        const wrapper = shallow(<Calc />);
        expect(wrapper.exists().toBe(true));
    });
});
