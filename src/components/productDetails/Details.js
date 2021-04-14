import React from 'react';
import Search from '../activitySearch/Search';
import Navigation from '../navigation/Navigation';
import "../productDetails/Details.css";
import Overview from '../tripOverview/Overview';


const Details = () => {

  return (
    <div className="hero-image">
        <Navigation></Navigation>
        <Search/>
        <div>
            <div className="trip-information">
                <div className="container">
                <div class="col-md-6">
                    <Overview />
                </div>
            </div>
        </div>
    </div>
    </div>
  );

};

export default Details;