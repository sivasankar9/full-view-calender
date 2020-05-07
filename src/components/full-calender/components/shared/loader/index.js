import './style.css';
import React from 'react';
import { connect } from 'react-redux';

const Loader = ({isLoading})=>{
    return (isLoading? <div class='lds-ellipsis'><div></div><div></div><div></div><div></div></div>:null);
};

const mapStateToProps = state =>  ({
    isLoading: false
});

export default connect(mapStateToProps)(Loader);
