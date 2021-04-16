import React from "react";
import "./Dates.css";
import { Link } from "react-router-dom";

const Dates = ({ details }) => {
  console.log(details);

  const dates = details.map((d) => {
      const date = d.departureDate
      const status = d.tripStatus
      return (
<tr>
      <td class="trip-date">
        <div> {date} </div>
      </td>
      <td class="trip-status">
        <div> {status} </div>
      </td>
     
      <td class="trip-action">
        <div>
        <Link
                      to={{
                        pathname:  `/summary/${d._id}`,
                        }}>

          <button class="booking-button-two" type="submit">
            Book now
          </button>
          </Link>
        </div>
      </td>
    </tr>
      )
    
  });

//   console.log(dates)

  return (
    <div>
      <div class="row">
        <div class="col-md-12">
          <div class="section-title text-center">
            <div class="title-border">
              <h1 class="text-white">
                Trip <span>Date &amp; Price</span>
              </h1>
            </div>
            <p class="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque dolor turpis, pulvinar varius dui
              <br /> id, convallis iaculis eros. Praesent porta lacinia
              elementum.
            </p>
          </div>
        </div>
      </div>
      <div class="dates-background row">
        <div class="col-md-12">
          <form action="#" method="post">
            <div class="table-content table-responsive">
              <table className="dates-table">
                <thead>
                  <tr>
                    <td class="trip-date">
                      <div>Departure Dates</div>
                    </td>
                    <td class="trip-status">
                      <div>Trip Status</div>
                    </td>
                    
                    <td class="trip-action">
                      <div>Action</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="transparent" colspan="4"></td>
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
