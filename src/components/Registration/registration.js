/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

function registration() {

    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPhoneNumber, setNewPhoneNumber] = useState('');
    const [newPassword, setNewPassword] = useState('');

    return (
        <div >
            <div className="grid grid-rows-3 grid-flow">
                <h4>Create an Account</h4>
                <label>Username</label>
                <input className="form-control" type="text"
                onChange={(e) => {
                    setNewUsername(e.target.value);
                }}
                />
                <label>Email</label>
                <input className="form-control" type="text"
                onChange={(e) => {
                    setNewEmail(e.target.value);
                }}
                />
                <label>Phone Number</label>
                <input className="form-control" type="text"
                onChange={(e) => {
                    setNewPhoneNumber(e.target.value);
                }}
                />
                <label>Password</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"
                onChange={(e) => {
                    setNewPassword(e.target.value);
                }}
                />
                <div className="mt-4 text-center">
                    <button type="button" className="bg-black rounded-md p-2 inline-flex items-center justify-center text-white">Register</button>
                </div>
            </div>
        </div>
    )
}

export default registration
