import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginFailed, setLoginFailed] = useState(false);
    const navigation = useNavigate();

    const getConnection = async (e) => {
        e.preventDefault();
        sessionStorage.setItem("isLoggedIn", true); /* test comme j'ai pas de server il faut le suppr*/
        axios.post("https://localhost:3000/login", {
            username: username,
            password: password
        }).then((res) => {
            console.log(res.data[0]);
            if (res.status === 200) {
                sessionStorage.setItem("isLoggedIn", true);
                sessionStorage.setItem("id", res.data[0].id);
                sessionStorage.setItem("username", username)

                navigation("/", { replace: true });
                window.location.reload(false);
            }
        })
            .catch((error) => {
                setLoginFailed(true)
            })
    }


    return (
        <body>
            <div className="menu">
                <header className="header">
                    <h1 style={{ color: 'white' }}>
                        WANDZ
                    </h1>
                </header>
                <form onSubmit={getConnection} >
                    <div className='login'>
                        <h2 style={{ color: 'white' }}> LOGIN</h2>
                        <label style={{ color: 'white' }} htmlFor='username'>Username</label>
                        <input
                            // required='true'
                            name='username'
                            type='text'
                            value={username}
                            placeholder='Enter your username'
                            onChange={(e) => setUsername(e.target.value)} />
                        <label style={{ color: 'white' }} htmlFor='password'>Password</label>
                        <input type='password'
                            // required='true'
                            name='password'
                            value={password}
                            placeholder='Enter your password'
                            onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">LOGIN</button>
                        <div className='register'>
                            Don't have an account ?
                            <a href="http://localhost:3000/register">REGISTER</a>
                        </div>
                        <div className='error'>
                            {loginFailed ? "No user found. Please try again" : ""}
                        </div>
                    </div>
                </form >
            </div >
        </body >
    )
}

export default Login;