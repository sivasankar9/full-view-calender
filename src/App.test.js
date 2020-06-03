import AppComponent from './App';
import React from 'react';
import {shallow } from './enzyme';

describe('Given the <appComponent/> component', () => {

    let appComponent;

    beforeEach(() => {

        appComponent = shallow(<AppComponent />);

    });

    it('should match the snapshot', () => {

        expect(appComponent).toMatchSnapshot();

    });

});
