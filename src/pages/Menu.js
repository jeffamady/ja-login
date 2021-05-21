import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Menu extends Component {

    // cerrarSesion=()=>{
    //     cookies.remove('id', {path: "/"});
    //     cookies.remove('apellido_paterno', {path: "/"});
    //     cookies.remove('apellido_materno', {path: "/"});
    //     cookies.remove('nombre', {path: "/"});
    //     cookies.remove('username', {path: "/"});
    //     window.location.href='./';
    // }

    // componentDidMount() {
    //     if(!cookies.get('username')){
    //         window.location.href="./";
    //     }
    // }

    logout=()=>{
        cookies.remove('_id', {path:'/'});
        cookies.remove('firstname', {path:'/'});
        cookies.remove('lastname', {path:'/'});
        cookies.remove('username', {path:'/'});
        cookies.remove('email', {path:'/'});

        window.location.href='./';

    }
    componentDidMount(){
        if(!cookies.get('firstname')){
            window.location.href='/';
        }
    }
    render() {
        console.log('_id: '+ cookies.get('_id'));
        console.log('firstname: '+ cookies.get('firstname'));
        console.log('lastname: '+ cookies.get('lastname'));
        console.log('username: '+ cookies.get('username'));

        // console.log('id: '+ cookies.get('id'));
        // console.log('apellido_paterno: '+cookies.get('apellido_paterno'));
        // console.log('apellido_materno: '+cookies.get('apellido_materno'));
        // console.log('nombre: '+cookies.get('nombre'));
        // console.log('username: '+cookies.get('username'));
        return (
            <div>
                Menu Principal



                <button onClick={()=> this.logout()}>Log out</button>

                {/* <br />
                <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button> */}
            </div>
        );
    }
}

export default Menu;