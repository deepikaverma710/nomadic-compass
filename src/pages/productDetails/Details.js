import React from 'react';
import Search from '../../components/activitySearch/Search';
import Navigation from '../../components/navigation/Navigation';
import "./Details.css";
import Overview from '../../components/tripOverview/Overview';
import Inclusion from '../../components/tripInclusions/Inclusion';
import Dates from '../../components/tripDates/Dates';


const Details = () => {

  return (
    <div className="details-header-image">
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
            <div className="trip-dates section-padding">
                <div className="container">
                    <Dates/>
                </div>
            </div>
          </div>
    </div>
  );

};

export default Details;