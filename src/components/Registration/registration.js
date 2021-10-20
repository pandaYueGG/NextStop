/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Axios from 'axios';

function registration() {
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const register = () => {
        Axios.post("/api/register", {
            username: newUsername,
            password: newPassword
          }).then((res) => {
            console.log(res);
            alert('you have registered');
          }).catch((err) => {
              console.log(err);
          });
    }
    return (
        <div className="mt-20 mx-5 lg:mx:50 xl:mx-40">
            <div className="grid grid-cols-1 justify-items-center bg-white rounded overflow-hidden shadow-md mx-10 lg:mx-52 py-20">
                <div className="grid grid-rows-3 grid-flow px-10 xl:px-24">
                    <div className="text-2xl font-bold">Create an Account</div>
                    <label className="flex justify-start mt-5">Username</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"
                    placeholder="username"
                    onChange={(e) => {
                        setNewUsername(e.target.value);
                    }}
                    />
                    <label className="flex justify-start mt-5">Password</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"
                    placeholder="password"
                    onChange={(e) => {
                        setNewPassword(e.target.value);
                    }}
                    />
                    <div className="mt-5 text-center">
                        <button onClick={register} type="button" className="bg-black rounded-md py-3 px-48 inline-flex items-center justify-center text-white">Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default registration
