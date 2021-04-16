import React, { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import "./Details.css";
import Overview from '../../components/tripOverview/Overview';
import Inclusion from '../../components/tripInclusions/Inclusion';
import Dates from '../../components/tripDates/Dates';
import { useLocation, useParams } from 'react-router-dom';
import { getPackageDates } from '../../network';


const Details = (props) => {
const {  selectedActivity, selectedDestination, selectedPackage } = useParams()
const [dates,setDates] = useState([])

useEffect(() => {
  (async () => {
    const date = await getPackageDates(selectedActivity, selectedDestination, selectedPackage)
    // act.map((a) => console.log(a.activityName));
    setDates(date);
  })().catch((err) => {
    console.error(err);
  });
}, []);

console.log(dates.dates)

  return (
    <div className="hero-image">
        <Navigation></Navigation>
     
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