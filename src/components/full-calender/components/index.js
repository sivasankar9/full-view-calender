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

    myRef = React.createRef();

    handleEvents = (e) => {
        debugger;
        this.props.updateCheckbox({ label: 'e.target.label', ischecked: e.target.checked, ObjId: e.target.value });
    }
    handleCloseButton = ()=>{
        this.props.model(!this.props.modelWindowCalender);

    }

    handlerDateClick = (e) => {
        this.date = e.dateStr;
        this.props.model(!this.props.modelWindowCalender);

    }
    componentWillMount = () => {

        this.props.fetchData();//events

        this.props.fetchCalenderEvents();
    }

    componentWillReceiveProps(prevProps,nextProps){
    console.log("componentWillReceiveProps",prevProps);
    }

    handlerCreateEvent = (e) => {
        const ObjId = Math.random().toString(36).substring(7);

        this.props.addCreateEvent({
            label:e.current.value,
            isSelected:true,
            ObjId});

        e.current.value = '';
        
    }

    handlerClick = (title, eventType) => {

        const selectedDate = this.date;
        this.props.model(false);
        this.props.addEvent({
            eventType, title, date: selectedDate
        }

        );

    }
    render() {
        console.log('llllllllllllll',this.props.newCalender);

        return (<div className='full-calender-container'>
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
            
            <div>
                <h4>Other calenders</h4>
                <input type="text" ref = {this.myRef}/>
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
                hasEvents = {this.props.newCalender.length>0}
                handleCloseButton = {this.handleCloseButton}
            />
        </div>);
    }
}

