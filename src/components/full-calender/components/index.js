import React from 'react';
import { Component } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Checkbox from './shared/check-box';
import '../../../App.css';


export default class EventCalender extends Component {

    handleEvents = (e) => {
        this.props.events({ checked: e.target.checked, value: e.target.value })
    }

    render() {
        console.log(this.props)
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
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                events={this.props.calenderdata} />
        </div>)
    }
}

