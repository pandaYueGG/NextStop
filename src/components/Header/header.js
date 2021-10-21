/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext } from 'react';
import Modal from './Modal.js';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../../Context.js';

function header() {
    const [openModal, setOpenModal] = useState(false);
    const {isAuth, setIsAuth} = useContext(LoginContext);
    let history = useHistory();

    return (
        <nav className="bg-white shadow">
            <div className="max-w-full mx-auto">
                <div className="flex justify-between">
                    <div className="flex">
                        <div>
                            <a href="/" className="flex items-center py-6 pl-5">
                            <svg className="h-7 w-7 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            <span className="font-bold tracking-wider"> NextStop</span>
                            </a>
                        </div>

                    </div>

                    <div className="flex items-center">
                        <a href="/searchFlight" className="py-5 hover:text-gray-500">Flights</a>
                        <a href="/hotels"  className="py-5 px-5 hover:text-gray-500">Hotels</a>
                        <a href="/events" className="py-5 pr-5 hover:text-gray-500">Events</a>
                        {isAuth 
                        ?
                        <button className="py-2 px-3 text-white bg-blue-900 hover:bg-red-600 rounded mr-5" onClick={() => {setIsAuth(false)}}>Logout</button>
                        :
                        <a href="#" className="py-5 pr-3 hover:text-gray-500" onClick={() => { setOpenModal(true); }}>Login</a>
                        }
                        
                        {isAuth 
                        ?
                        <a></a>
                        :
                        <button className="py-2 px-3 text-white bg-red-400 hover:bg-red-500 rounded mr-5" onClick={() => {history.push("/registration")}}>Signup</button>
                        }
                        

                        {openModal && <Modal closeModal={setOpenModal} />}
                    </div>
                </div>

            </div>

             {/* mobile menu  */}
        </nav>
    )
}

export default header;
