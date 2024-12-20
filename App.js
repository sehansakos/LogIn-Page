// LoginPage.js
import React, { useState } from 'react';
import './App.css';

const LoginPage = () => {
    const [nic, setNic] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('NIC:', nic);
        console.log('Password:', password);
        // Add your login logic here
    };

    return (
        <div className="container">
            <div className="combinedBox">
                <div className="leftBox">

                </div>
                <div className="formContainer">
                    <h2 className="title">BlockBallot</h2>
                    <form onSubmit={handleLogin}>
                        <div className="inputContainer">
                            <input
                                type="text"
                                placeholder="Enter your NIC number"
                                value={nic}
                                onChange={(e) => setNic(e.target.value)}
                                className="input"
                            />
                        </div>
                        <div className="inputContainer">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input"
                            />
                        </div>
                        <button type="submit" className="button">Login</button>
                        <div className="separator">OR</div>
                        <button type="button" className="button">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
