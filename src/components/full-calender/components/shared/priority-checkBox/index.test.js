import Chance from 'chance';
import PriorityCheckBox from './index';
import React from 'react';
import {shallow } from '../../../../../../src/enzyme';


describe('Given the <priorityCheckBox/> component', () => {
    
    const chance = new Chance();

    let priorityCheckBox;

    const testProps = Object.freeze({
        label: chance.word(),
         handlerPriority: f=>f, 
         value: chance.word(), 
         isSelected: chance.bool()
        });

    beforeEach(() => {

        priorityCheckBox = shallow(<PriorityCheckBox {...testProps} />);

    });

    it('should match the snapshot', () => {

        expect(priorityCheckBox).toMatchSnapshot();

    });

});
