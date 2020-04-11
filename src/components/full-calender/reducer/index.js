import calenderEvents from './calender-events';
import calenderModelWindow from './calender-model-window';
import {combineReducers} from 'redux';
import filterCriteria from './filter-criteria';


export default combineReducers({
    calenderEvents,
    filterCriteria,
    calenderModelWindow
});