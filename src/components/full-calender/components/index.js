import "../../../App.css";
import "./style.css";
import { generateColor, generateObjId } from "./shared/utilities";
import CheckBox from "./shared/check-box";
import { Component } from "react";
import CreateOtherCalender from "./shared/create-new-calender";
import FullCalendar from "@fullcalendar/react";
import Header from "./shared/header";
import ModelWindow from "./shared/ModelWindow";
import PriorityCheackBox from "./shared/priority-checkBox";
import React from "react";
import ReadModeModelWindow from "./shared/read-mode-model-window";
import { convert } from "../components/shared/utilities";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default class EventCalender extends Component {
  date;

  state = {
    open: false,
    readModeWindow: false,
    myText: "",
    isEditable: false,
    eventsClick: {}
  };

  handleModelCloseButton = () => {
    this.setState({ open: false });
  };

  handlerDateClick = (e) => {
    this.date = e.dateStr;
    this.setState({ open: true });
  };

  handleReadModeModelOpen = (info) => {
      const {event: {_def: {extendedProps: eventsClick}}} = info;

    this.setState({ readModeWindow: true, myText: info.event.title, eventsClick });
  };

  handleReadModeModelClose = () => {
    this.setState({ readModeWindow: false });
  };

  handleEvents = (e) => {
    const {target: { checked: ischecked, value: ObjId }} = e;

    this.props.allNewCalenderEvents({ ischecked, ObjId });
  };

  componentWillMount = () => {
    this.props.fetchCalenderEventsData();

    this.props.fetchNewCalenderEventsData();

    this.props.fetchProrityEvents();
  };

  handlerCreateEvent = (label) => {
    this.props.CreateNewCalenderEvent({
      label,
      isSelected: true,
      color: generateColor(),
      ObjId: generateObjId()
    });
  };

  handlerPriority = (e) => {
    const eTarget = e.target;

    this.props.priorityUpdateCheckbox({
      priorityId: eTarget.value,
      isSelected: eTarget.checked
    });
  };

  handlerEventsDrop = (info) => {
    const eventDate = convert(info.event.start);

    this.props.updateCalenderEventById({
      eventId: info.event.extendedProps.eventId,
      date: eventDate
    });
  };

  handlerClick = (title, eventType, priorityId, color) => {
    const selectedDate = this.date;

    this.props.allCalenderEvents({
      eventType,
      title,
      date: selectedDate,
      priorityId,
      color,
      eventId: generateObjId()
    });
    this.setState({ open: false });
  };

  handleIsEditable = () => {
    this.setState({ isEditable: !this.state.isEditable });
  };

  handleIsDeleted = (eventId) => {
      this.props.deleteEvent(eventId);
  };

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>

        <div className='full-calender-container'>
          <div>
            {this.props.newCalender.map((item) => (
              <CheckBox
                key={item.ObjId}
                value={item.ObjId}
                handleEvents={(chckbox) => this.handleEvents(chckbox)}
                label={item.label}
                checkedFlg={item.isSelected}
                color={item.color}
              ></CheckBox>
            ))}
          </div>

          <div className='priority'>
            {this.props.priorityEvents.map((item) => (
              <div>
                <PriorityCheackBox
                  key={item.priorityId}
                  value={item.priorityId}
                  label={item.label}
                  handlerPriority={(e) => this.handlerPriority(e)}
                  isSelected={item.isSelected}
                ></PriorityCheackBox>
              </div>
            ))}
          </div>

          <div>
            <CreateOtherCalender handlerCreateEvent={this.handlerCreateEvent} />
          </div>

          <div>
            <FullCalendar
              eventClick={this.handleReadModeModelOpen}
              dateClick={this.handlerDateClick}
              plugins={[dayGridPlugin, interactionPlugin]}
              events={this.props.calenderdata}
              editable={true}
              draggable={true}
              eventDrop={(info) => this.handlerEventsDrop(info)}
            />
          </div>

          <ModelWindow
            modelShow={this.state.open}
            handlerClick={this.handlerClick}
            newCalender={this.props.newCalender}
            priorityEvents={this.props.priorityEvents}
            hasEvents={this.props.newCalender.length > 0}
            handleModelCloseButton={this.handleModelCloseButton}
            handlerDateClick={this.handlerDateClick}
          />

          <ReadModeModelWindow
            modelShow={this.state.readModeWindow}
            handleReadModeModelClose={this.handleReadModeModelClose}
            handleReadModeModelOpen={this.handleReadModeModelOpen}
            state={this.state}
            handleIsEditable={this.handleIsEditable}
            handleIsDeleted={this.handleIsDeleted}
          />
        </div>
      </div>
    );
  }
}
