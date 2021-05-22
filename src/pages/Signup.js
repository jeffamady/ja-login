import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import '../css/Signup.css';

const cookies = new Cookies();
const baseUrl="https://jnaappointments.herokuapp.com";

export const Signup =()=>{
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const addUser =()=>{
       axios.post(baseUrl + "/signup", {
           firstname: firstname,
           lastname: lastname,
           username: username,
           email: email,
           password: password
        })
        .then(response=>{
            console.log(response.data);
            return response.data;
        })
        .then(response=>{
            if(response.length > 0){
                const res = response[0];
                console.log(res);
                console.log(res);
                cookies.set('_id',res._id, {path:'/'});
                cookies.set('lastname',res.lastname, {path:'/'});
                cookies.set('firstname',res.firstname, {path:'/'});
                cookies.set('username',res.username, {path:'/'});
                cookies.set('email',res.email, {path:'/'});
                alert(`Welcome to your page ${res.firstname} ${res.lastname}`);

                window.location.href='./menu';
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return(
        <div className='fContainer'>
            <div className='sContainer'>
                <div className='fGroup'>
                
                    <br />
                    <input
                        placeholder="Firstname"
                        type='text'
                        className='form-control'
                        name='firstname'
                        onChange={({target})=>{
                            setFirstname(target.value);
                        }}
                    />
                    <br />

                    
                    <br />
                    <input
                        placeholder="Lastname"
                        type='text'
                        className='form-control'
                        name='lastname'
                        onChange={({target})=>{
                            setLastname(target.value);
                        }}
                    />
                    <br />

                    
                    <br />
                    <input
                        placeholder="Username"
                        type='text'
                        className='form-control'
                        name='username'
                        onChange={({target})=>{
                            setUsername(target.value);
                        }}
                    />
                    <br />
                    <br />
                    <input
                        placeholder="Email"
                        type='email'
                        className='form-control'
                        name='email'
                        onChange={({target})=>{
                            setEmail(target.value);
                        }}
                    />
                    <br />

                    
                    <br />
                    <input
                        placeholder="Password"
                        type='password'
                        className='form-control'
                        name='password'
                        onChange={({target})=>{
                            setPassword(target.value);
                        }}

                    />
                    <br />

                    <button
                        className='btn btn-primary btn-login '
                        onClick={addUser}
                    >
                        Sign up Free
                    </button>
                    <p>Already have an account? <a href='./'>Log In</a></p>


                </div>
            </div>
        </div>
    )
}


