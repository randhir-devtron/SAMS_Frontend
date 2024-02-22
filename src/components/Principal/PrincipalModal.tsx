import React, { Dispatch } from 'react'
import { useState } from "react";
import '../../App.css'
import './principal.css'
import Select, { SingleValue, ActionMeta } from 'react-select';
interface Props {
    SetModalFlag: Dispatch<boolean>;
}

const PrincipalModal: React.FC<Props> = ({ SetModalFlag }) => {

    interface option {
        value: string;
        label: string;
    }

    const [formData, setFormData] = useState<{ firstname: string, lastname: string, email: string, qualification?: string, class?: number }>({
        firstname: '',
        lastname: '',
        email: '',
        class: 0,
        qualification: ''
    })

    const [user, setUser] = useState("");
    const person: option[] = [
        { value: 'student', label: 'Student' },
        { value: 'teacher', label: 'Teacher' }
    ]
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        interface StudentData {
            firstname: string;
            lastname: string;
            email: string;
            qualification?: string; // Optional qualification field
            class?: number; // Optional class field
        }
        const studentData: StudentData = {
            firstname: formData.firstname,
            lastname: formData.lastname,
            email: formData.email
        }
        if (user == 'student') {
            studentData['class'] = formData.class;
        }
        else {
            studentData['qualification'] = formData.qualification;
        }
        // handleClose();
        try {
            if (user != 'student' && user != 'teacher') {
                throw new Error('Choose student or teacher');
            }

            const url = `http://localhost:9000/${user}`;
            console.log(url)
            const response = await fetch(url, {
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/json',
                // },
                body: JSON.stringify(studentData),
            });
            // console.log(url);
            if (!response.ok) {
                // Handle non-200 responses
                throw new Error('Login failed');
            }
            console.log("Randhir here");
            console.log(response)
            const data = await response.json();
            // const token = data.token;
            // localStorage.setItem('token', token);
            console.log(data);

        } catch (error) {
            console.error('Error occurred:', (error as Error).message);
        }
        handleClose();
    };

    const SetCredential = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Ensure the value is greater than 0
        if (name === 'class' && parseInt(value) <= 0) {
            // Display an error message or handle the invalid input
            console.log('Class value must be greater than 0');
            return;
        }
        setFormData({ ...formData, [name]: value });
    };

    function handleClose() {
        SetModalFlag(false);
    }
    const handleChange = (newValue: SingleValue<option>, actionMeta: ActionMeta<option>) => {
        if (newValue !== null) {
            setUser(newValue.value);
        }
        if (actionMeta !== null) {
            console.log(actionMeta)
        }
        // console.log(actionMeta)
    };
    if (user == 'student') {
        const elementQual = document.getElementsByClassName('qualificationHide')[0] as HTMLElement;
        elementQual.style.display = 'none';
        const element = document.getElementsByClassName('classHide')[0] as HTMLElement;
        element.style.display = 'block';
    }
    else if (user == 'teacher') {
        const elementClass = document.getElementsByClassName('classHide')[0] as HTMLElement;
        elementClass.style.display = 'none';
        const elementQual = document.getElementsByClassName('qualificationHide')[0] as HTMLElement;
        elementQual.style.display = 'block';
    }
    return (
        <div className="principal-modal">
            <span className="close" onClick={handleClose}>&times;</span>
            <h2>Add Role</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor={formData.firstname}>First Name : </label>
                <input type="text" name="firstname" onChange={SetCredential} value={formData.firstname} />
                <br />
                <label htmlFor={formData.lastname}>Last Name : </label>
                <input type="text" name="lastname" onChange={SetCredential} value={formData.lastname} />
                <br />
                <label htmlFor={formData.email}>Email : </label>
                <input type="email" name="email" onChange={SetCredential} value={formData.email} />
                <br />
                <div className="qualificationHide">
                    <label htmlFor={formData.qualification}>Qualification : </label>
                    <input type="text" name="qualification" onChange={SetCredential} value={formData.qualification} />
                    <br />
                </div>
                <div className="classHide">
                    <label htmlFor={String(formData.class)}>Class : </label>
                    <input type="number" name="class" onChange={SetCredential} value={formData.class} />
                    <br />
                </div>
                <input type="submit" onChange={SetCredential} value="Submit" />
                <label htmlFor="person">Person : </label>

                <Select options={person} onChange={handleChange} />
            </form>
        </div>
    )
}

export default PrincipalModal