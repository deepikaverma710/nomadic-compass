import React from 'react';
import '../tripOverview/Overview.css';

const Overview = ({details}) => {

return (
    <div className="trip-overview">
            {/* <div class="col-md-6">
            <div className="trip-info-left-text">
                <div className="section-title text-center">
                    <div className="title-border">
                        <h1>Trip <span>Overview</span></h1>
                    </div>   
                    <p>{details.packageDescription} </p>   
                </div>  
                <ul className="details-info">
                    <li className="">{details.startLocation}</li>
                    <li className="">{details.finishLocation}</li>
                    <li className="">{details.groupSize}</li>
                    <li className="">{details.packageHighlights}</li>
                </ul>
            </div>
        </div> */}
        {/* Highlights */}
        
    </div>
    );
};

export default Overview;