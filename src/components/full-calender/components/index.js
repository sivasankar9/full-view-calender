import '../../../App.css';
import './style.css';
import Checkbox from './shared/check-box';
import { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import ModelWindow from './shared/ModelWindow';
import React from 'react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default class EventCalender extends Component {
    date;

    handleEvents = (e) => {
        this.props.events({ checked: e.target.checked, value: e.target.value });
    }

    handlerDateClick = (e)=>{
        this.date = e.dateStr;
        this.props.model(!this.props.modelWindowCalender);
        
    }
    componentWillMount =()=>{
        
        this.props.fetchData();

    }

    handlerClick = (title,eventType)=>{
        let myDate = this.date;
        this.props.model(false);
        this.props.addEvent({
         eventType, title, date:myDate }

        );
        
    }
    render() {
        return (<div className ='full-calender-container'>
                    <div>
                        <Checkbox
                            label="BILL"
                            value="bill"
                            handleEvents={this.handleEvents}
                            checkedFlg={this.props.calendercriterai.bill} />
                        <Checkbox
                            label="EVENT"
                            value="event"
                            handleEvents={this.handleEvents}
                            checkedFlg={this.props.calendercriterai.event} />
                    </div>
                    <div>
                    <FullCalendar
                            dateClick = {this.handlerDateClick}
                            plugins={[dayGridPlugin, interactionPlugin]}
                            events={this.props.calenderdata} />
                    </div>
                        
                        <ModelWindow 
                        modelShow = {this.props.modelWindowCalender}
                        handlerClick = {this.handlerClick}
                        />
                </div>);
    }
}

