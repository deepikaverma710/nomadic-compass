import React, { useEffect, useState } from "react";
import "../home/Home.css";
import Search from "../../components/activitySearch/Search";
import { getAllActivities, getAllDestinations } from "../../network";

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [destinations, setDestinations ] = useState([]);
  const[selectedActivity,setSelectedActivity] = useState("")
  const[selectedDestination,setSelectedDestination] = useState("")
  
  const handleActivityChange = async (e) => {
      setSelectedActivity(e.target.value)
      await loadDestinations(e.target.value)
  }

  const handleDestinationChange = async (e) => {
    setSelectedDestination(e.target.value)
    await loadPackages(e.target.value)
  }

  useEffect(() => {
    (async () => {
      const act = await getAllActivities();
      // act.map((a) => console.log(a.activityName));
      setActivities(act);
    })().catch((err) => {
      console.error(err);
    });
  }, []);

  const loadDestinations = async(activity) => {
    const destinations = await getAllDestinations(activity);
    setDestinations(destinations);
  }

  const loadPackages = async(destination) => {
    const destinations = await getAllDestinations(destination);
    setDestinations(destinations);
  }

  return (
    <div className="hero-image">
      <form action="#" id="banner-searchbox" className="cat-selection">
        <Search type="activity" data={activities} handleActivityChange={handleActivityChange} />
        { selectedActivity && <Search type="destination" data={destinations} handleDestinationChange={handleDestinationChange} /> }
        <button type="submit" id="btn-search-category">
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Home;
