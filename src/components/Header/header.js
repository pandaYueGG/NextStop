import React from 'react'

function header() {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-full mx-auto">
                <div className="flex justify-between">
                    <div className="flex">
                        <div>
                            <a href="#" className="flex items-center py-6 pl-5">
                            <svg className="h-7 w-7 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            <span className="font-bold tracking-wider"> NextStop</span>
                            </a>
                        </div>
                        
                    </div>
                    
                    <div className="flex items-center">
                        <a href="#" className="py-5">Flights</a>
                        <a href="#" className="py-5 px-5">Hotels</a>
                        <a href="#" className="py-5 pr-3">Login</a>
                        <a href="#" className="py-2 px-3 text-white bg-red-400 rounded mr-5">Signup</a>
                    </div>
                </div>

            </div>

             {/* mobile menu  */}
        </nav>
    )
}

export default header;
