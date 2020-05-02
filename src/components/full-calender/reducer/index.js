import calenderEvents from './calender-events';
import calenderModelWindow from './calender-model-window';
import {combineReducers} from 'redux';
import filterCriteria from './filter-criteria';
import newCalenderEvents from './new-calender-events';
import priorityEvents from './priority';


export default combineReducers({
    calenderEvents,
    filterCriteria,
    calenderModelWindow,
    newCalenderEvents,
    priorityEvents

});