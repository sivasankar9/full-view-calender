// Copyright (c) 2019 Deere & Company

import AppComponent from './App';
import React from 'react';
import { shallow, mount, render } from './enzyme';

describe( 'Given the <appComponent/> component', () => {

    let appComponent;

    beforeEach( () => {

        appComponent = shallow(<AppComponent />);

    } );

    it( 'should match the snapshot', () => {

        expect( appComponent ).toMatchSnapshot();

    } );

} );
