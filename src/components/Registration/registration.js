/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

function registration() {

    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPhoneNumber, setNewPhoneNumber] = useState('');
    const [newPassword, setNewPassword] = useState('');

    return (
        <div className="mt-8 mx-5">
            <div className="grid grid-cols-1 bg-white rounded overflow-hidden shadow-md mx-52 py-20">
                <div className="grid grid-rows-3 grid-flow px-24">
                    <div className="text-lg font-bold">Create an Account</div>
                    <label className="flex justify-start">Username</label>
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
                        <button type="button" className="bg-black rounded-md py-2 px-32 inline-flex items-center justify-center text-white">Register</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default registration
