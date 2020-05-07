
import { addCreateEvent, addEvent, fetchCalenderEvents, fetchData, fetchProrityEvents, model, priorityUpdateCheckbox, updateCheckbox } from './actions';
import EventCalender from './components';
import { connect } from 'react-redux';

const filterEvents = (criteria, priorityCriteria, events) => {

    let filetrCalenderEvents = criteria.reduce((acc, item) => {
        return acc.concat(events.filter(data => data.eventType === item.ObjId));
    }, []);

    if (priorityCriteria.length > 0) {
        let xc = filetrCalenderEvents.reduce((acc, item) => {
            let x = [];

            priorityCriteria.forEach(pcitem => {
                if (pcitem.priorityId == item.priorityId) {
                    x.push(item);
                }
            });
            return acc.concat(x);
        }, []);

        return xc;
    } else {
        return filetrCalenderEvents;
    }
};

const mapStateToProps = state => ({
    calenderdata: filterEvents(state.fullCalender.filterCriteria, state.fullCalender.priorityFilterCriteria, state.fullCalender.calenderEvents.events),
    calendercriterai: state.fullCalender.filterCriteria,
    modelWindowCalender: state.fullCalender.calenderModelWindow,
    newCalender: state.fullCalender.newCalenderEvents,
    priorityEvents: state.fullCalender.priorityEvents,
    priorityFilterCriteria: state.fullCalender.priorityFilterCriteria

});

export default connect(mapStateToProps, { fetchProrityEvents, updateCheckbox, model, addEvent, fetchData, fetchCalenderEvents, addCreateEvent, priorityUpdateCheckbox })(EventCalender);
