import React from 'react';
import {withRouter} from 'react-router-dom';

function profile() {
    return (
        <>
            <h1> You're logged in!</h1>
            <div className="grid grid-cols-3 gap-4">
                
                <div className="px-5 h-screen grid grid-rows-4 grid-flow-col gap-4 border-r-2">
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
                <div> Card Container goes here. </div>
            </div>
        </>
    )
}

export default withRouter(profile);
