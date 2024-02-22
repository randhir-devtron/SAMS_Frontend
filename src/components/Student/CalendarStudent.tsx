import { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import './CalendarStudent.css'
const CalendarStudent = () => {
    const preselectedDays = [
        {
            year: 2019,
            month: 10,
            day: 2,
        },
        {
            year: 2019,
            month: 10,
            day: 15,
        },
        {
            year: 2019,
            month: 10,
            day: 30,
        },
    ]

    const [selectedDayRange, setSelectedDayRange] = useState(
        preselectedDays
    );

    // const handleChange = () => {

    // }

    return (
        <Calendar
            calendarClassName="calendar-student"
            value={selectedDayRange}
            onChange={setSelectedDayRange}
            shouldHighlightWeekends
        />
    );
};

export default CalendarStudent;