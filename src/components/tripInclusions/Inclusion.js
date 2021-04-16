import React from 'react';
import '../tripInclusions/Inclusion.css';
import { GiMeal }  from 'react-icons/gi';
import { FaTruck }  from 'react-icons/fa';
import { BiBuildingHouse }  from 'react-icons/bi';
import { TiLocation, TiLocationOutline }  from 'react-icons/ti';
import { IoMdPeople }  from 'react-icons/io';
import { CgPlayStopR }  from 'react-icons/cg';



const Inclusion = ({details}) => {

return (
    <div>
        <div class="col-md-12">
        <h2><b>InterContinental Presidente Cancun Resort</b></h2>
        <div className="trip-detail-wrap">
        <div className="trip-info-left-text">
                <div className="section-title ">
                    <div className="title-border">
                        <br></br><h5><b>Trip Details</b></h5>
                    </div>   
                    <p className="pac-details">{details.packageDescription} </p>   
                </div>  
                <ul className="details-info">
                    <li className=""><TiLocation /> {details.startLocation}</li>
                    <li className=""><TiLocationOutline /> {details.finishLocation}</li>
                    <li className=""><IoMdPeople /> {details.groupSize} People</li>
                    <li className=""><CgPlayStopR /> {details.packageHighlights}</li>
                </ul>
            </div>
        <div className="trip-info-left-text">
        <div className="section-title ">
                    <div className="title-border">
                        <br></br><h5><b>Trip Duration</b></h5>
                    </div>   
                </div>  
                    <p className="trp-dt-text">{details.duration} Days</p>
                </div>
                <div className="trip-info-left-text">
                    <div className="title-border">
                        <br></br><h5><b>Trip Budget</b></h5>
                    </div> 
                    <p className="trp-dt-text">CAD ${details.budget}</p>
                </div>

                </div>


<div className="btn-wrpa-in">
                <div className="button  text-center mt-4 mb-5">
                    <a className="search-btn p-2">Book this trip</a>
                </div>  
                </div>
            <div class="section-title text-center">
                <div class="title-border">
                        <h3><b>Trip <span>Inclusions</span></b></h3>
                        <p className="inc-text-i">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui<br/> id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        <div className="">
                        <p className="text-center">{details.meals}</p>
                        <p className="text-center">{details.accommodation}</p>
                        <p className="text-center">{details.transport}</p>

                        </div>
                        
                </div>
            </div>
        </div>
        <div className="row mt-5" >
            <div class="col-md-4 col-sm-6">
                <div class="include-item text-center">
                    <div class="include-icon">
                        <GiMeal/>
                    </div>
                    <div class="include-text">
                        <h4>Meals</h4>
                        <p>{details.meals}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="include-item text-center">
                    <div class="include-icon">
                        <FaTruck/>
                    </div>
                    <div class="include-text">
                        <h4>Transport</h4>
                        <p>{details.transport}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 hidden-sm">
                <div class="include-item text-center">
                    <div class="include-icon">
                        <BiBuildingHouse/>
                    </div>
                    <div class="include-text">
                        <h4>Accommodation</h4>
                        <p>{details.accommodation}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Inclusion;