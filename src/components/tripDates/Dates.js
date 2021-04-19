import React from "react";
import "./Dates.css";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const Dates = ({ details }) => {
  const { selectedActivity, selectedDestination } = useParams()
  console.log(details);
  const dates = details.map((d) => {
    const date = d.departureDate
    const status = d.tripStatus
    return (
      <tr key={d._id}>
        <td className="trip-date">
          <div> {date} </div>
        </td>
        <td className="trip-status">
          <div> {status} </div>
        </td>
        <td className="trip-action">
          <div>
            <Link
              to={{
                pathname: `/summary/${selectedActivity}/${selectedDestination}/${d._id}`,
              }}>
              <button className="booking-button-two" type="submit">
                Book now
          </button>
            </Link>
          </div>
        </td>
      </tr>
    )
  });

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center">
            <div className="title-border">
              <h1 className="text-white">
                Trip <span>Date &amp; Price</span>
              </h1>
            </div>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque dolor turpis, pulvinar varius dui
              <br /> id, convallis iaculis eros. Praesent porta lacinia
              elementum.
            </p>
          </div>
        </div>
      </div>
      <div className="dates-background row">
        <div className="col-md-12">
          <form action="#" method="post">
            <div className="table-content table-responsive">
              <table className="dates-table">
                <thead>
                  <tr>
                    <td className="trip-date">
                      <div>Departure Dates</div>
                    </td>
                    <td className="trip-status">
                      <div>Trip Status</div>
                    </td>

                    <td className="trip-action">
                      <div>Action</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="transparent" colspan="4"></td>
                  </tr>
                </thead>
                <tbody>
                  {dates}
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dates;
