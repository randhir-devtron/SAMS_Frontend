import React, { Dispatch } from 'react'
import { useState } from "react";
import '../../App.css'

interface Props {
    SetModalFlag: Dispatch<boolean>;
}

const PrincipalModal: React.FC<Props> = ({ SetModalFlag }) => {

    const [formData, setFormData] = useState<{ username: string, password: string, email: string, qualification: string }>({
        username: ' ',
        password: ' ',
        email: ' ',
        qualification: ' '
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:9000/home/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                // Handle non-200 responses
                throw new Error('Login failed');
            }

            const data = await response.json();

            // Assuming the backend responds with a token
            const token = data.token;

            // Store the token in local storage or a cookie for future authenticated requests
            localStorage.setItem('token', token);

            // Redirect the user or perform other actions upon successful login
            console.log('Login successful');
        } catch (error) {
            // Handle network errors or other errors
            console.error('Error occurred:', (error as Error).message);
        }
    };

    const SetCredential = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Extract the 'name' and 'value' properties from the input field that triggered the change.
        const { name, value } = e.target;
        // Update the 'formData' state by spreading the current state and updating the value of the property specified by 'name'.
        console.log(name, value)
        setFormData({ ...formData, [name]: value });
    };

    function handleClose() {
        SetModalFlag(false);
    }
    return (
        <div className="principal-modal">
            <span className="close" onClick={handleClose}>&times;</span>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor={formData.username}>Username : </label>
                <input type="text" name="username" onChange={SetCredential} value={formData.username} />
                <br />
                <label htmlFor={formData.password}>Password : </label>
                <input type="text" name="password" onChange={SetCredential} value={formData.password} />
                <br />
                <label htmlFor={formData.email}>Email : </label>
                <input type="text" name="email" onChange={SetCredential} value={formData.email} />
                <br />
                <label htmlFor={formData.qualification}>Qualification : </label>
                <input type="text" name="qualification" onChange={SetCredential} value={formData.qualification} />
                <br />
                <input type="submit" onChange={SetCredential} value="Submit" />
            </form>
        </div>
    )
}

export default PrincipalModal