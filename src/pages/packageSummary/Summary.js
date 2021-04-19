import React, { useContext, useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import "./Summary.css";
import { useParams, useHistory } from 'react-router-dom';
import { getPackages, insertCartItem } from "../../network";
import { firebaseAuth } from '../../context/ContextIndex';
import { BiBuildingHouse } from 'react-icons/bi';
import { TiLocation, TiLocationOutline } from 'react-icons/ti';
import { IoMdPeople } from 'react-icons/io';
import { CgPlayStopR } from 'react-icons/cg';
import "../productDetails/Details.css"

const Summary = () => {
    let history = useHistory();
    const { token } = useContext(firebaseAuth)
    const { dateid, selectedActivity, selectedDestination } = useParams()
    const [tourPackage, setTourPackage] = useState([])

    const addToCart = async (e) => {
        e.preventDefault()
        await insertCartItem(token, dateid, selectedActivity, selectedDestination)
        setTimeout(() => { history.push("/cart");; }, 1000);
    }

    useEffect(() => {
        if (token != null) {
            (async () => {
                const res = await getPackages(token, dateid)
                setTourPackage(res[0])
            })()

        } else { }
    }, []);

    return (
        <div className="">
            <Navigation></Navigation>
            {/* <h1 className="summary-heading text-center">Package Summary</h1>
            <div className="trip-overview row">
                <div class="col-md-6">
                    <div className="trip-info-left-text">
                        <div className="section-title text-center">
                            <div className="title-border">
                                <h1>{tourPackage.packageName}</h1>
                            </div>
                            <p>{tourPackage.packageDescription}</p>
                        </div>
                        <ul className="tourPackage-info">
                            <li className=""><span>Start- </span>{tourPackage.startLocation}</li>
                            <li className=""><span>Finish- </span>{tourPackage.finishLocation}</li>
                            <li className=""><span>Min group size- </span>{tourPackage.groupSize}</li>
                            <li className=""><span>Level- </span>{tourPackage.activityLevel}</li>
                        </ul>
                    </div>
                </div>
                <div className="highlights col-md-6">
                    <div className="trip-booking-info text-center">
                        <h3>Duration</h3>
                        <p> {tourPackage.duration} Days</p>
                    </div>
                    <div className="trip-booking-info text-center">
                        <h3>Budget</h3>
                        <p> {tourPackage.budget} per person</p>
                    </div>
                </div>
            </div> */}
            <div className="container pt-5">
            <div className="row pt-5">
            
            <div className="col-md-7">
            <h1 className="package-heading"><b>{tourPackage.packageName}</b></h1> 
                <div className="trip-detail-wrap">
                    <div className="trip-info-left-text">
                        <div className="section-title ">
                            <div className="title-border">
                                <br></br><h5><b>Trip tourPackage</b></h5>
                            </div>
                            <p className="pac-tourPackage">{tourPackage.packageDescription} </p>
                        </div>
                        <ul className="tourPackage-info">
                            <li className=""><TiLocation /> {tourPackage.startLocation}</li>
                            <li className=""><TiLocationOutline /> {tourPackage.finishLocation}</li>
                            <li className=""><IoMdPeople /> {tourPackage.groupSize} People</li>
                            <li className=""><CgPlayStopR /> {tourPackage.packageHighlights}</li>
                        </ul>
                    </div>
                    <div className="trip-info-left-text">
                        <div className="section-title ">
                            <div className="title-border">
                                <br></br><h5><b>Trip Duration</b></h5>
                            </div>
                        </div>
                        <p className="trp-dt-text">{tourPackage.duration} Days</p>
                    </div>
                    <div className="trip-info-left-text">
                        <div className="title-border">
                            <br></br><h5><b>Trip Budget</b></h5>
                        </div>
                        <p className="trp-dt-text">CAD ${tourPackage.budget}</p>
                    </div>
                    <div className="btn-wrpa-in">
                    <div className="button  btn-block text-center mt-4 mb-5">
                
                        <button className="add-to-cart-btn p-2 text-center" onClick={addToCart}>Add to Cart  </button>


                    </div>
                </div>
                </div>
                
                
            </div>
            <div className="col-md-5">
                <img src="https://media.cntraveler.com/photos/5efce9992f3cc6dbc9e6a406/4:5/w_2916,h_3645,c_limit/MensHikingBoots-2020-GettyImages-598222532.jpg" alt="activities" className="img-fluid"/>
            </div>
            </div>
            </div>
           
        </div>
    );
};

export default Summary;