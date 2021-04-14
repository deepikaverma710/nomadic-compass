import React from 'react';
import Search from '../../components/activitySearch/Search';
import Navigation from '../../components/navigation/Navigation';
import "./Details.css";
import Overview from '../../components/tripOverview/Overview';


const Details = () => {

  return (
    <div className="hero-image">
        <Navigation></Navigation>
        <Search/>
        <div>
            <div className="trip-information">
                <div className="container">
                    <Overview/>
                </div>
            </div>
            
        </div>
    </div>
  );

};

export default Details;