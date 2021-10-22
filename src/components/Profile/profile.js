import React from 'react';
import {withRouter} from 'react-router-dom';
import { PaperAirplaneIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/outline';
import { CalendarIcon } from '@heroicons/react/outline';
import { MenuIcon } from '@heroicons/react/outline';
import  lv from '../Homepage/Flights/LV.jpeg';
import  NY from '../Homepage/Flights/NY.jpeg';
import  MI from '../Homepage/Flights/MI.jpeg';
import  cabin from '../Homepage/Hotels/cabin.jpeg';
import  dog from '../Homepage/Hotels/dog.jpeg';
import  family from '../Homepage/Hotels/family.jpeg';

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
                            <div className="grid grid-cols-3 gap-4 py-10">
                                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden">
                                    <img className="w-full h-full rounded-lg shadow-inner cursor-pointer" src={lv} />
                                </div>
                                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden">
                                <img className="w-full h-full rounded-lg shadow-inner cursor-pointer" src={NY} />
                                </div>
                                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden">
                                <img className="w-full h-full rounded-lg shadow-inner cursor-pointer" src={MI} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 w-full px-20 justify-items-center">
                        <div className=" border rounded-lg bg-white shadow-lg overflow-hidden">
                            <div className="mt-10 text-2xl font-bold text-left ml-10">Your Hotels</div>
                            <div className="grid grid-cols-3 gap-4 py-10">
                                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden">
                                    <img className="w-full h-full rounded-lg shadow-inner cursor-pointer" src={cabin} />
                                </div>
                                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden">
                                    <img className="w-full h-full rounded-lg shadow-inner cursor-pointer" src={dog} />
                                </div>
                                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden">
                                    <img className="w-full h-full rounded-lg shadow-inner cursor-pointer" src={family} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 w-full px-20 justify-items-center">
                        <div className=" border rounded-lg bg-white shadow-lg overflow-hidden">
                            <div className="mt-10 text-2xl font-bold text-left ml-10">Your Events</div>
                            <div className="grid grid-cols-3 gap-4 py-10">
                                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden">
                                    <img className="w-full h-full rounded-lg shadow-inner cursor-pointer" src={lv} />
                                </div>
                                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden">
                                    <img className="w-full h-full rounded-lg shadow-inner cursor-pointer" src={lv} />
                                </div>
                                <div className="mx-10 border rounded-lg bg-white shadow-lg overflow-hidden">
                                    <img className="w-full h-full rounded-lg shadow-inner cursor-pointer" src={lv} />
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
