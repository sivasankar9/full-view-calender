import '../../../App.css';
import './style.css';
import {ObjId, color} from './shared/utilities';
import CheckBox from './shared/check-box';
import { Component } from 'react';
import CreateOtherCalender from './shared/create-new-calender';
import FullCalendar from '@fullcalendar/react';
import Header from './shared/header';
import ModelWindow from './shared/ModelWindow';
import PriorityCheackBox from './shared/priority-checkBox';
import React from 'react';
import {convert} from '../components/shared/utilities';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default class EventCalender extends Component {
    date;

    handleEvents = (e) => {
        const eTarget= e.target;

        this.props.allNewCalenderEvents({ ischecked: eTarget.checked, ObjId: eTarget.value });
    }
    handleCloseButton = ()=>{
        this.props.model(!this.props.modelWindowCalender);
    }

    handlerDateClick = (e) => {
        this.date = e.dateStr;
        this.props.model(!this.props.modelWindowCalender);

    }
    componentWillMount = () => {

        this.props.fetchCalenderEventsData();

        this.props.fetchNewCalenderEventsData();

        this.props.fetchProrityEvents();
    }

    handlerCreateEvent = (label) => {

            this.props.CreateNewCalenderEvent({
                label,
                isSelected: true,
                color,
                ObjId});
    }
    
    handlerPriority = (e)=>{
        const eTarget= e.target;
        
        this.props.priorityUpdateCheckbox({priorityId: eTarget.value, isSelected: eTarget.checked});
    }
    
    handlerEventsDrop = (info)=>{
        const eventDate = convert(info.event.start);

        this.props.updateCalenderEventById({_id: info.event.extendedProps._id, date: eventDate});
    }

    handlerClick = (title, eventType, priorityId, color) => {
        const selectedDate = this.date;

        this.props.model(false);
        this.props.allCalenderEvents({
            eventType, title, date: selectedDate, priorityId, color
        }
        );
    }

    render() {
        return (<div>
        <div>
            <Header />
        </div>
        
        <div className='full-calender-container'>
            
            <div>
                {
                    this.props.newCalender.map(item => <CheckBox
                        key={item.ObjId}
                        value={item.ObjId}
                        handleEvents={(chckbox)=>this.handleEvents(chckbox)}
                        label={item.label}
                        checkedFlg={item.isSelected}
                        color = {item.color}
                    ></CheckBox>)
                }

            </div>

            <div className = 'priority'>
                {
                    this.props.priorityEvents.map(item=><div>
                    <PriorityCheackBox
                    key = {item.priorityId}
                    value = {item.priorityId}
                    label = {item.label}
                    handlerPriority = {(e)=>this.handlerPriority(e)}
                    isSelected = {item.isSelected}
                    ></PriorityCheackBox>
                    </div>)
                }
            </div>
            
            <div>
                <CreateOtherCalender handlerCreateEvent = {this.handlerCreateEvent}/>
            </div>

            <div>
                <FullCalendar
                    dateClick={this.handlerDateClick}
                    plugins={[dayGridPlugin, interactionPlugin]}
                    events={this.props.calenderdata} 
                    editable = {true}
                    draggable = {true}
                    eventDrop = {(info)=>this.handlerEventsDrop(info)}/>
            </div>
            
                <ModelWindow
                modelShow={this.props.modelWindowCalender}
                handlerClick={this.handlerClick}
                newCalender = {this.props.newCalender}
                priorityEvents = {this.props.priorityEvents}
                hasEvents = {this.props.newCalender.length>0}
                handleCloseButton = {this.handleCloseButton}
            />
        </div>
        </div>);
    }
}

