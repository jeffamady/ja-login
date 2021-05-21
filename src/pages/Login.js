import React, { Component } from 'react';
import '../css/Login.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl="https://jnaappointments.herokuapp.com";
const cookies = new Cookies();

class Login extends Component { 
    state= {
        form: {
            email: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }

        });
        // console.log(this.state.form);
    }

    iniciarSesion= async () =>{
        await axios.post(baseUrl + "/login", {email: this.state.form.email, password: this.state.form.password})
        .then(response=>{
            console.log(response.data);
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                const res = response[0];
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
        .catch(error=>{
            alert(`${error}`)
        })
    }

    componentDidMount(){
        if(cookies.get('_id')){
            window.location.href='./menu';
        }
    }

    render() {
        return(
            <div className='fContainer'>
                <div className='sContainer'>
                    <div className='fGroup'>
                        <label>Email</label>
                        <br />
                        <input
                            type='email'
                            className='form-control'
                            name='email'
                            onChange={this.handleChange}
                            required
                        />
                        <br />

                        <label>Password</label>
                        <br />
                        <input
                            type='password'
                            className='form-control'
                            name='password'
                            onChange={this.handleChange}
                            required

                        />
                        <br />

                        <button className='btn btn-primary ' onClick={()=> this.iniciarSesion()} >Log in</button>
                        <p>Don't have an account? <a href='./Signup'>Sign Up Free</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
