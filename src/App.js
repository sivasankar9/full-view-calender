import React,{Component} from 'react';
import PropTypes from 'prop-types';

const upper = (a)=>{a.toUpperCase()};
class App extends Component{

    render(){
        return (<div>namez:::{upper('hi all')} Welcome siva sankar, manasa & Roith.
            </div>);
    }
}

App.propTypes = {
  namez: PropTypes.string.isRequired
}

export default App;
