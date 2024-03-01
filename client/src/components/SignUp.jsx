import React, { useState } from 'react'
import './SignUpIn.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function SignUp() {
    const [values,setValues] = useState({
        fullName:'',
        email:'',
        password:''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setValues(preValues =>({
            ...preValues,
            [name]:value
        }));
        setError('');
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/register', values);
            console.log('Registration successful');
            setError('');  
            navigate('/signin')
        } catch(err) {
            console.error('Registration failed', err.response.data);
            setError(err.response.data.message);
            }
    };
  return (
    <form onSubmit={handleSubmit}>
        <h2 className='title'>Sign up</h2>
        <p className='title-massage'>Create An Account To Add Your Thoughts About The Book You Are Reading</p>
        <div>
            <label>NAME</label>
            <br></br>
            <input 
            type='text'
            name='fullName'
            value={values.fullName}
            placeholder='First Name and Last Name'
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label>EMAIL</label>
            <br></br>
            <input
            type='email'
            name='email'
            value={values.email}
            placeholder='name@email.com'
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label>PASSWORD</label>
            <br></br>
            <input
            type='password'
            name='password'
            value={values.password}
            placeholder='Create Password'
            onChange={handleChange}
            required
            />
        </div>
        <button type='submit'>Join Now</button>
        {error && <p style={{color:'red'}}>{error}</p>}
    </form>
  )
}
