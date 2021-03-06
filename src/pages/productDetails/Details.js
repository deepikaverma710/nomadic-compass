import React, { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import "./Details.css";
import Overview from '../../components/tripOverview/Overview';
import Inclusion from '../../components/tripInclusions/Inclusion';
import Dates from '../../components/tripDates/Dates';
import { useParams } from 'react-router-dom';
import { getPackageDates } from '../../network';


const Details = (props) => {
  const { selectedActivity, selectedDestination, selectedPackage } = useParams()
  const [dates, setDates] = useState([])

  useEffect(() => {
    (async () => {
      const date = await getPackageDates(selectedActivity, selectedDestination, selectedPackage)
      setDates(date)
      console.log(date)
    })().catch((err) => {
      console.error(err);
    });
  }, []);

  console.log(dates)


  return (
    <div className="pb-4">
      <Navigation></Navigation>
      <div>
        <div className="trip-information">
          <div className="container">
            <Overview details={dates} />
          </div>
        </div>
        <div className="trip-inclusions">
          <div className="container">
            <Inclusion details={dates} />
          </div>
        </div>
        <div className="trip-dates ">
          <div className="container">
            {dates.dates && <Dates details={dates.dates} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;