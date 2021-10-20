import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {ModalBackground, ModalContainer, TitleCloseBtn, TitleCloseBtnButton, ModalContainerBody } from './Styled/Modal.js';
// import { useHistory } from 'react-router-dom';

function Modal({ closeModal}) {
    // let history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    Axios.defaults.withCredentials = true;

    const login = () => {
        
        Axios.post("http://localhost:3001/api/login", {
          username: username,
          password: password,
        }).then((res) => {
            console.log(res);
            alert('successful logged in')
            // history.push('/profile');
        });
    };

    useEffect(() => {

    }, [])

    return (
        <>
            <ModalBackground>
                <ModalContainer>
                    <TitleCloseBtn>
                        <TitleCloseBtnButton onClick={() => closeModal(false)}> X </TitleCloseBtnButton>
                    </TitleCloseBtn>
                    <ModalContainerBody>
                        <div className="grid grid-rows-3 grid-flow">
                            <div className="text-4xl font-bold">
                                Login
                            </div>
                            <div className="my-2">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username..." 
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="my-2">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Password..." 
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="my-2">
                                <button onClick={login} className="bg-black rounded-md py-2 px-32 inline-flex items-center justify-center text-white">Login </button>
                            </div>
                        </div>
                    </ModalContainerBody>
                </ModalContainer>
            </ModalBackground>
        </>
    );
};

export default Modal;