import React from 'react';
import {ModalBackground, ModalContainer, TitleCloseBtn, TitleCloseBtnButton, ModalContainerBody } from './Styled/Modal.js';

function Modal({ closeModal}) {
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
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username..." />
                            </div>
                            <div className="my-2">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Password..." />
                            </div>
                            <div className="my-2">
                                <button className="bg-black rounded-md py-2 px-32 inline-flex items-center justify-center text-white">Login </button>
                            </div>
                        </div>
                    </ModalContainerBody>
                </ModalContainer>
            </ModalBackground>
        </>
    );
};

export default Modal;