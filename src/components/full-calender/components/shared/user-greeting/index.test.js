import Chance from 'chance';
import React from 'react';
import UserGreeting from './index';
import {shallow } from '../../../../../../src/enzyme';

describe('Given the <userGreeting/> component', () => {

    const chance = new Chance();

    let userGreeting;

    const testProps = Object.freeze({
        loginDetails: chance.word()
        });

    beforeEach(() => {

        userGreeting = shallow(<UserGreeting {...testProps} />);

    });

    it('should match the snapshot', () => {

        expect(userGreeting).toMatchSnapshot();

    });

});
