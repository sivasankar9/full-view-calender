
import { addCreateEvent, addEvent, fetchCalenderEvents, fetchData, model, updateCheckbox } from './actions';
import EventCalender from './components';
import { connect } from 'react-redux';

const filterEvents = (criteria, events) =>{

    return criteria.reduce((acc, item) => {
        return acc.concat(events.filter(data => data.eventType === item.ObjId));
    }, []);

};
const mapStateToProps = state =>  ({
    calenderdata: filterEvents(state.fullCalender.filterCriteria, state.fullCalender.calenderEvents.events),
    calendercriterai: state.fullCalender.filterCriteria,
    modelWindowCalender: state.fullCalender.calenderModelWindow,
    newCalender: state.fullCalender.newCalenderEvents
});

export default connect(mapStateToProps, { updateCheckbox, model, addEvent, fetchData, fetchCalenderEvents, addCreateEvent })(EventCalender);