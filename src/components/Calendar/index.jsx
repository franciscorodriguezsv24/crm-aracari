import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarOficial = () => {
    const events = [
        {
        "title": "Meeting",
        "start": new Date(2024, 6, 29, 10, 0),
        "end": new Date(2024, 6, 29, 11, 0)
        },
        {
        "title": "Lunch",
        "start": new Date(2024, 6, 30, 12, 0),
        "end": new Date(2024, 6, 30, 13, 0)
        },
        {
        "title": "Team Standup",
        "start": new Date(2024, 6, 29, 9, 0),
        "end": new Date(2024, 6, 29, 9, 30)
        },
        {
        "title": "Project Review",
        "start": new Date(2024, 6, 30, 15, 0),
        "end": new Date(2024, 6, 30, 16, 0)
        },
        {
        "title": "Client Call",
        "start": new Date(2024, 6, 31, 14, 0),
        "end": new Date(2024, 6, 31, 15, 0)
        },

    ];
        
    return (
        <div className='d-flex flex-column w-100 h-100'>
        <h1>Task Calendar</h1>
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 900 }}
        />
        </div>
    );
};

export default CalendarOficial