import '../App.css'
import { useState } from 'react'
function Login(){


    const [formData, setFormData] = useState<{username: string, password: string}>({
        username:' ',
        password:' '
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:9000/login', {
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
    return  <div className='Login-Page'>
        <div className='Login'>
            <div className='Login-Left'>
                <div className='Login-Text'>
                    Nice to see you again
                </div>
                <div className='Login-Text'>
                    <h1>Welcome Back</h1>
                </div>
            </div>
        </div>
        <div className='Login'>
            <div className='Login-Right'>
                <div>This is My Login Page </div>
                <div className='Login-Form'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor={formData.username}>Username</label>
                        <input type="text" name="username" onChange={SetCredential} value={formData.username}/>
                        <br/>
                        <label htmlFor={formData.password}>Password</label>
                        <input type="text" name="password" onChange={SetCredential} value={formData.password}/>
                        <br/>
                        <input type="submit" onChange={SetCredential} value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default Login