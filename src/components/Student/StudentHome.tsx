// import React from 'react'
import Select, { SingleValue, ActionMeta } from 'react-select';
function StudentHome() {
    interface option {
        value: number;
        label: number;
    }

    const month: option[] = [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 4, label: 4 },
        { value: 5, label: 5 },
        { value: 6, label: 6 },
        { value: 7, label: 7 },
        { value: 8, label: 8 },
        { value: 9, label: 9 },
        { value: 10, label: 10 },
        { value: 11, label: 11 },
        { value: 12, label: 12 }
    ]
    const year: option[] = [
        { value: 2022, label: 2022 },
        { value: 2023, label: 2023 },
        { value: 2024, label: 2024 },
        { value: 2025, label: 2025 },
        { value: 2026, label: 2026 },
        { value: 2027, label: 2027 }
    ]
    const handleChange = (newValue: SingleValue<option>, actionMeta: ActionMeta<option>) => {
        if (newValue !== null) {
            console.log(newValue);
        }
        if (actionMeta !== null) {
            console.log(actionMeta)
        }
    };
    // const handleChange = (selMonth: option) => console.log(selMonth.value);

    return (
        <div className='student-home'>
            <div className="student-home-select">
                <label htmlFor="month">Month : </label>
                <Select options={month} onChange={handleChange} />
            </div>
            <div className="student-home-select">
                <label htmlFor="year">year : </label>
                <Select options={year} />
            </div>
        </div>
    )
}

export default StudentHome