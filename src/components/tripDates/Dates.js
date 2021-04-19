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
    <div className="mb-5 pb-5">
      <div className="row mb-4">
                <div className="col">
                
                <div className="section-title text-center">
                    <div className="title-border">
                        <h3><b>Trip <span>Dates and Prices</span></b></h3>
                        <p className="inc-text-i">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui<br /> id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                    </div>
                </div>
                </div>
            </div>
      <div className=" row">
        <div className="col-md-12">
          <form action="#" method="post">
            <div className="">
              <table className="dates-table table table-bordered table-hover ">
                <thead className="table-info">
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
                  {/* <tr>
                    <td className="transparent" colspan="4"></td>
                  </tr> */}
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
