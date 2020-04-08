import React from 'react';
import { Component } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Checkbox from './shared/check-box';
import '../../../App.css';
import ModelWindow from './shared/ModelWindow'


export default class EventCalender extends Component {
    date;

    handleEvents = (e) => {
        this.props.events({ checked: e.target.checked, value: e.target.value })
    }

    handlerDateClick = (e)=>{
        this.date = e.dateStr;
        this.props.model(!this.props.modelWindowCalender);
        
    }
    handlerClick = (title,eventType)=>{
        let myDate = this.date;
        this.props.model(false);
        this.props.addEvent({
         eventType, title, date:myDate }

        )
        
    }
    

    
    render() {
        return (<div>
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
            <ModelWindow 
            modelShow = {this.props.modelWindowCalender}
            handlerClick = {this.handlerClick}
             />
            <FullCalendar
                dateClick = {this.handlerDateClick}
                plugins={[dayGridPlugin, interactionPlugin]}
                events={this.props.calenderdata} />
        </div>)
    }
}

