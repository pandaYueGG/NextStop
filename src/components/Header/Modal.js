import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import {ModalBackground, ModalContainer, TitleCloseBtn, TitleCloseBtnButton, ModalContainerBody } from './Styled/Modal.js';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../../Context.js';

function Modal({ closeModal}) {
    
    let history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {isAuth, setIsAuth} = useContext(LoginContext);

    Axios.defaults.withCredentials = true;
    
    const login = () => {
        
        Axios.post("http://localhost:3001/api/login", {
          username: username,
          password: password,
        }).then((res) => {
            if (!res.data.auth) {
                setIsAuth(false);
                alert('Wrong username and password combination');
            } else {
                localStorage.setItem("token", res.data.token)
                setIsAuth(true);
                history.push('/profile');
            }
        });
    };

    const userAuthenticated = () => {
        Axios.get("http://localhost:3001/api/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <ModalBackground>
                <ModalContainer>
                    <TitleCloseBtn>
                        <TitleCloseBtnButton onClick={() => closeModal(false)}> X </TitleCloseBtnButton>
                    </TitleCloseBtn>
                    <ModalContainerBody>
                        <div className="grid grid-rows-3 grid-flow mx-20">
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
                            {/* <div className="my-2">
                                {isAuth && (
                                    <button onClick={userAuthenticated} className="bg-blue-500 rounded-md py-2 px-32 inline-flex items-center justify-center text-white"> Check if Authenticated </button>
                                )}
                            </div> */}
                            
                        </div>
                        
                    </ModalContainerBody>
                </ModalContainer>
                
            </ModalBackground>
            
        </>
    );
};

export default Modal;