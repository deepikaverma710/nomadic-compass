import React from 'react';
import Search from '../../components/activitySearch/Search';
import Navigation from '../../components/navigation/Navigation';
import "./Details.css";
import Overview from '../../components/tripOverview/Overview';
import Inclusion from '../../components/tripInclusions/Inclusion';


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
            <div className="trip-inclusions">
                <div className="container">
                    <Inclusion/>
                </div>
             </div>
          </div>
    </div>
  );

};

export default Details;