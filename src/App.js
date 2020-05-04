import React,{Component} from 'react';
import EventCalender from './components/full-calender';
import Loader from './components/full-calender/components/shared/loader';
class App extends Component{

    render(){
        return (<div>
            <Loader />

            <EventCalender />
            </div>);
    }
}
export default App;