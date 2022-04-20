import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigate();

    const getConnection = async (e) => {
        e.preventDefault();

        axios.post("https://localhost:3000/register", {
            username: username,
            password: password,
        }).then((res) => {
            console.log(res)
            if (res.status === 200) {
                console.log("login success")
                sessionStorage.setItem("isLoggedIn", true);
                sessionStorage.setItem("id", res.data[0].id);
                sessionStorage.setItem("username", username);

                navigation("/", { replace: true });
                window.location.reload(false);
            }
        });
    }

    return (
        <div className="menu">
            <header className="header">
                <h1 style={{ color: 'white' }}>
                    WANDZ
                </h1>
            </header>
            <form onSubmit={getConnection} >
                <div className='login'>
                    <h2 style={{ color: 'white' }}>REGISTER</h2>
                    <label style={{ color: 'white' }} htmlFor='username'>Username</label>
                    <input
                        name='username'
                        type='text'
                        value={username}
                        placeholder='Enter your username'
                        onChange={(e) => setUsername(e.target.value)} />
                    <label style={{ color: 'white' }} htmlFor='password'>Password</label>
                    <input type='password'
                        name='password'
                        value={password}
                        placeholder='Enter your password'
                        onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">REGISTER</button>
                    <div className='register'>
                        Already have an account ?
                        <a href="http://localhost:3000/login">LOGIN</a>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default Register;