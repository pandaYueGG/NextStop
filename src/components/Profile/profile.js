import React from 'react';
import {withRouter} from 'react-router-dom';

function profile() {
    return (
        <>
            
            <div className="grid grid-cols-3">
                {/* <div className="...">1</div>
                <div className="col-span-2">2</div> */}
                <div className="h-screen grid grid-rows-4 grid-flow-col border-r w-60">
                    <div className="h-10">Upcoming flights</div>
                    <div>Upcoming events</div>
                    <div>hotel bookings</div>
                    <div>edit profile</div>
                </div>
                <div className="col-span-2">
                    <div class="h-screen container mx-auto border-solid border-4 border-light-blue-500 m-20">
                        <h1>Authenticated user login page</h1>
                        <h1>Upcoming flights goes here</h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default withRouter(profile);
