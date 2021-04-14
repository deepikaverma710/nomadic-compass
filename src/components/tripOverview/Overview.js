import React from 'react';
import '../tripOverview/Overview.css';

const Overview = () => {

return (
    <div className="trip-overview row">
            <div class="col-md-6">
            <div className="trip-info-left-text">
                <div className="section-title text-center">
                    <div className="title-border">
                        <h1>Trip <span>Overview</span></h1>
                    </div>   
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>   
                </div>  
                <ul className="details-info">
                    <li className=""><span>Start</span>Kathmandu, Nepal</li>
                    <li className=""><span>Ages</span>MIN 16</li>
                    <li className=""><span>Finish</span>Kathmandu, Nepal</li>
                    <li className=""><span>Group size</span>Min 1, Max 12</li>
                    <li className=""><span>Countries</span>Nepal</li>
                </ul>
            </div>
        </div>
        {/* Highlights */}
        <div className="col-md-6">
                <div className="trip-booking-info text-center">
                    <h3>Duration</h3>
                    <p>10 Days</p>
                </div>
                <div className="trip-booking-info text-center">
                    <h3>Budget</h3>
                    <p>$650 per person</p>
                </div>
                <div className="button">
                    <button  type="submit">Book this trip</button>
                </div>     
        </div>
    </div>
    );
};

export default Overview;