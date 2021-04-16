import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "../home/Home.css";
import Search from "../../components/activitySearch/Search";
import {
  getAllActivities,
  getAllDestinations,
  getAllPackages,
} from "../../network";
import { Link } from "react-router-dom";

const Home = () => {
  let history = useHistory();
  const [activities, setActivities] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [packages, setPackages] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedPackageDetails, setSelectedPackageDetails] = useState([]);

  useEffect(() => {
    (async () => {
      const act = await getAllActivities();
      // act.map((a) => console.log(a.activityName));
      setActivities(act);
    })().catch((err) => {
      console.error(err);
    });
  }, []);

  const handleActivityChange = async (e) => {
    setSelectedActivity(e.target.value);
    await loadDestinations(e.target.value);
  };

  const handleDestinationChange = async (e) => {
    setSelectedDestination(e.target.value);
    await loadPackages(selectedActivity, e.target.value);
  };

  const handlePackageChange = async (e) => {
    setSelectedPackage(e.target.value);
    const selected = packages.filter(
      (item) => item.packageName === e.target.value
    );
    setSelectedPackageDetails(selected);
  };

  const loadDestinations = async (activity) => {
    const destinations = await getAllDestinations(activity);
    setDestinations(destinations);
  };

  const loadPackages = async (activity, destination) => {
    const packages = await getAllPackages(activity, destination);
    setPackages(packages);
  };



  // const seeDetails = () => {
  //   history.push({
  //     pathname: "/details",
  //       packageData: {
  //         selectedActivity: selectedActivity,
  //         selectedDestination: selectedDestination,
  //         selectedPackage: selectedPackage,
  //         packages: packages,
  //         selectedPackageDetail: selectedPackageDetails,
  //       },
  //   });
  // };

  console.log(selectedActivity);
  console.log(selectedDestination);
  console.log(selectedPackage);
  console.log(packages);
  console.log(selectedPackageDetails);

  return (
    <div className="hero-image">
      <Search
        type="activity"
        data={activities}
        handleChange={handleActivityChange}
      />
      {selectedActivity && (
        <Search
          type="destination"
          data={destinations}
          handleChange={handleDestinationChange}
        />
      )}
      {selectedDestination && (
        <Search
          type="package"
          data={packages}
          handleChange={handlePackageChange}
        />
      )}
      <Link
        to={{
          pathname:  `/${selectedActivity}/${selectedDestination}/${selectedPackage}`,
        }}
      >
        See Package Details
      </Link>

      {/* <button onClick={seeDetails}>See</button> */}
    </div>
  );
};

export default Home;
