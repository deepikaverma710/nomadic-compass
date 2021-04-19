import React from 'react';
import '../tripInclusions/Inclusion.css';
import { GiMeal } from 'react-icons/gi';
import { FaTruck } from 'react-icons/fa';
import { BiBuildingHouse } from 'react-icons/bi';
import { TiLocation, TiLocationOutline } from 'react-icons/ti';
import { IoMdPeople } from 'react-icons/io';
import { CgPlayStopR } from 'react-icons/cg';

const Inclusion = ({ details }) => {
    console.log(details)

    return (
        <div>
            
            <div className="row">
            
            <div className="col-md-7">
            <h1 className="package-heading"><b>{details.packageName}</b></h1> 
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
                    <div className="btn-wrpa-in">
                    <div className="button  btn-block text-center mt-4 mb-5">
                        {/* <a  href className="search-btn p-2 text-center">Book this trip</a> */}
                    </div>
                </div>
                </div>
                
                
            </div>
            <div className="col-md-5">
                <img src="https://isteam.wsimg.com/ip/58c246b7-81ca-45c1-941a-f72130606cf9/IMG_7293.JPG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true" alt="activities" className="img-fluid"/>
            </div>
            </div>
            <div className="row my-5">
                <div className="col mt-5">
                
                <div className="section-title text-center">
                    <div className="title-border">
                        <h3><b>Trip <span>Inclusions</span></b></h3>
                        <p className="inc-text-i">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui<br /> id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="row mt-5" >
                <div className="col-md-4 col-sm-6">
                    <div className="include-item text-center">
                        <div className="include-icon">
                            <GiMeal />
                        </div>
                        <div className="include-text">
                            <h4>Meals</h4>
                            <p>{details.meals}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="include-item text-center">
                        <div className="include-icon">
                            <FaTruck />
                        </div>
                        <div className="include-text">
                            <h4>Transport</h4>
                            <p>{details.transport}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 hidden-sm">
                    <div className="include-item text-center">
                        <div className="include-icon">
                            <BiBuildingHouse />
                        </div>
                        <div className="include-text">
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