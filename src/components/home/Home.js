import React, { useEffect, useState } from "react";
import "../home/Home.css";
import Search from "../../components/activitySearch/Search";
import { getAllActivities, getAllDestinations, getAllPackages } from "../../network";
import { Link } from "react-router-dom";

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [destinations, setDestinations ] = useState([]);
  const [packages, setPackages ] = useState([]);
  const[selectedActivity,setSelectedActivity] = useState("")
  const[selectedDestination,setSelectedDestination] = useState("")
  const[selectedPackage,setSelectedPackage] = useState("")


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
      setSelectedActivity(e.target.value)
      await loadDestinations(e.target.value)
  }

  const handleDestinationChange = async (e) => {
    setSelectedDestination(e.target.value)
    await loadPackages(selectedActivity, e.target.value)
  }

  const handlePackageChange = async (e) => {
    setSelectedPackage(e.target.value)
    console.log("Package Selected")
  }

  const loadDestinations = async(activity) => {
    const destinations = await getAllDestinations(activity);
    setDestinations(destinations);
  }

  const loadPackages = async(activity,destination) => {
    const packages = await getAllPackages(activity, destination);
    setPackages(packages);
  }

  const seeDetails = () => {
    <Link to="/details" />
  }

  return (
    <div className="hero-image">
      <form action="#" id="banner-searchbox" className="cat-selection">
        <Search type="activity" data={activities} handleChange={handleActivityChange} />
        { selectedActivity && <Search type="destination" data={destinations} handleChange={handleDestinationChange}  /> }
        { selectedDestination && <Search type="package" data={packages} handleChange={handlePackageChange} /> }
        <button type="submit" id="btn-search-category" onClick={seeDetails}>
          See Details
        </button>
      </form>
    </div>
  );
};

export default Home;
