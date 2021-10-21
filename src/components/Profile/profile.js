import React from 'react';
import {withRouter} from 'react-router-dom';
import { PaperAirplaneIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/outline';
import { CalendarIcon } from '@heroicons/react/outline';
import { MenuIcon } from '@heroicons/react/outline';

function profile() {
    return (
        <>
            <div className="flex min-h-screen">
                <div className="w-64 bg-gray-50 border-r border-gray-200">
                <div className="mt-10 flex items-center ml-5">
                        <MenuIcon className="w-6 h-6 mr-2" />
                        <h3 className="mr-6 text-xs text-gray-600 uppercase tracking-widest">
                        
                            Dashboard
                        </h3>
                    </div>
                    <div className="mt-10 flex items-center ml-5">
                        <PaperAirplaneIcon className="w-6 h-6 mr-2" />
                        <h3 className="mr-6 text-xs text-gray-600 uppercase tracking-widest">
                        
                            Upcoming Flights
                        </h3>
                    </div>
                    <div className="mt-10 flex items-center ml-5">
                        <HomeIcon className="w-6 h-6 mr-2"/>
                        <h3 className="mr-6 text-xs text-gray-600 uppercase tracking-widest">
                            Saved Hotels
                        </h3>
                    </div>
                    <div className="mt-10 flex items-center ml-5">
                        <CalendarIcon className="w-6 h-6 mr-2"/>
                        <h3 className="mr-6 text-xs text-gray-600 uppercase tracking-widest">
                            Saved Events
                        </h3>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="my-10 text-4xl font-bold text-left ml-20">Dashboard</div>
                    <div className="mt-6 w-full px-20 justify-items-center">
                        <div className=" border rounded-lg bg-white shadow-lg overflow-hidden">
                            <div className="mt-10 text-2xl font-bold text-left ml-10">Your Upcoming Flights</div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden  py-16 my-10">
                                    Flight 1
                                </div>
                                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden  py-16 my-10">
                                    Flight 2
                                </div>
                                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden  py-16 my-10">
                                    Flight 3
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 w-full px-20 justify-items-center">
                        <div className=" border rounded-lg bg-white shadow-lg overflow-hidden">
                            <div className="mt-10 text-2xl font-bold text-left ml-10">Your Hotels</div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden  py-16 my-10">
                                    Hotel 1
                                </div>
                                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden  py-16 my-10">
                                    Hotel 2
                                </div>
                                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden  py-16 my-10">
                                    Hotel 3
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 w-full px-20 justify-items-center">
                        <div className=" border rounded-lg bg-white shadow-lg overflow-hidden">
                            <div className="mt-10 text-2xl font-bold text-left ml-10">Your Events</div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden  py-16 my-10">
                                    Event 1
                                </div>
                                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden  py-16 my-10">
                                    Event 2
                                </div>
                                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden  py-16 my-10">
                                    Event 3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(profile);
