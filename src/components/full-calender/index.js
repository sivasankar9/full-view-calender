
import {addCreateEvent,addEvent,events,fetchData,model,fetchCalenderEvents} from './actions';
import EventCalender from './components';
import { connect } from 'react-redux';

const filterData = (eventData, evtCategory) => eventData.filter(item => item.eventType !== evtCategory);

const filterEvents = (criteria, events) => {

    if (!criteria.bill && !criteria.event) {
        return [];
    } else if (criteria.bill && !criteria.event) {
        return filterData(events, "EVENT");
    } else if (criteria.event && !criteria.bill) {
        return filterData(events, "BILL");
    } else {
        return events;
    }
};     
const mapStateToProps = state => ({
    calenderdata: filterEvents(state.fullCalender.filterCriteria, state.fullCalender.calenderEvents.events),
    calendercriterai: state.fullCalender.filterCriteria,
    modelWindowCalender:state.fullCalender.calenderModelWindow,
    newCalender:state.fullCalender.newCalenderEvents
});

export default connect(mapStateToProps, {events,model,addEvent,fetchData,fetchCalenderEvents,addCreateEvent})(EventCalender);