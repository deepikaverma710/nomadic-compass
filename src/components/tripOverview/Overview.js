import React from 'react';
import '../tripOverview/Overview.css';

const Overview = ({details}) => {

return (
    <div className="trip-overview row">
            <div class="col-md-6">
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
        </div>
        {/* Highlights */}
        <div className="col-md-6">
                <div className="trip-booking-info text-center">
                    <h3>Duration</h3>
                    <p>{details.duration}</p>
                </div>
                <div className="trip-booking-info text-center">
                    <h3>Budget</h3>
                    <p>{details.budget}</p>
                </div>
                <div className="button">
                    <button >Book this trip</button>
                </div>     
        </div>
    </div>
    );
};

export default Overview;