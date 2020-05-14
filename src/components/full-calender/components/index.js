import '../../../App.css';
import './style.css';
import Checkbox from './shared/check-box';
import Header from './shared/header';
import { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import ModelWindow from './shared/ModelWindow';
import PriorityCheackBox from './shared/priority-checkBox';
import React from 'react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default class EventCalender extends Component {
    date;

    myRef = React.createRef();

    isEmpty = value =>!(/^\s*$/.test(value)) && !(value === null);

    handleEvents = (e) => {
        this.props.allNewCalenderEvents({ label: 'e.target.label', ischecked: e.target.checked, ObjId: e.target.value });
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

    handlerCreateEvent = (e) => {
        const ObjId = Math.random().toString(36).substring(7);

        if (this.isEmpty(e.current.value)) {
            this.props.CreateNewCalenderEvent({
                label: e.current.value,
                isSelected: true,
                ObjId});
        }
        e.current.value = '';
        
    }
    handlerPriority = (e)=>{
        
        this.props.priorityUpdateCheckbox({priorityId: e.target.value, isSelected: e.target.checked});
    }

    handlerClick = (title, eventType, priorityId) => {
        const selectedDate = this.date;

        this.props.model(false);
        this.props.allCalenderEvents({
            eventType, title, date: selectedDate, priorityId
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
                    this.props.newCalender.map(item => <Checkbox
                        key={item.ObjId}
                        value={item.ObjId}
                        handleEvents={(chckbox)=>this.handleEvents(chckbox)}
                        label={item.label}
                        checkedFlg={item.isSelected}

                    ></Checkbox>)
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
                <h4>Other calenders</h4>
                <input type='text' ref = {this.myRef}/>
                <button onClick={() => this.handlerCreateEvent(this.myRef)}>CREATE</button>
            </div>

            <div>
                <FullCalendar
                    dateClick={this.handlerDateClick}
                    plugins={[dayGridPlugin, interactionPlugin]}
                    events={this.props.calenderdata} />
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

