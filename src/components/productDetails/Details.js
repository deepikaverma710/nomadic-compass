import React from 'react';
import Search from '../activitySearch/Search';
import Navigation from '../navigation/Navigation';
import "../productDetails/Details.css";


const Details = () => {

  return (
    <div className="hero-image">
        <Navigation></Navigation>
        <Search/>
        <div>
        <div className="trip-information">
            <div className="container">
                <p>test</p>
            </div>
        </div>
    </div>
    </div>
  );

};

export default Details;