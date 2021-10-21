import React from 'react';
import {withRouter} from 'react-router-dom';
import { PaperAirplaneIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/outline';
import { CalendarIcon } from '@heroicons/react/outline';

function profile() {
    return (
        <>
            <div className="flex min-h-screen">
                <div className="w-64 bg-gray-50 border-r border-gray-200">
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
                    <main> Main Content</main>
                </div>
            </div>
        </>
    )
}

export default withRouter(profile);
