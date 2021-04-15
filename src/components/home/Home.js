import React, { useEffect, useState } from "react";
import "../home/Home.css";
import Search from "../../components/activitySearch/Search";
import { getAllActivities, addNewActivity } from "../../network";

const Home = () => {
  const [activities, setActivities] = useState([]);
  const[selectedActivity,setSelectedActivity] = useState("")
  const handleActivityChange = (e) => {
      setSelectedActivity(e.target.value)
  }
console.log(selectedActivity)
  useEffect(() => {
    (async () => {
      const act = await getAllActivities();
      // act.map((a) => console.log(a.activityName));
      console.log(act)
      setActivities(act);
    })().catch((err) => {
      console.error(err);
    });
  }, []);
console.log(activities)
  return (
    <div className="hero-image">
      <form action="#" id="banner-searchbox" className="cat-selection">
        {console.log(activities)}
        <Search type="activity" data={activities} handleActivityChange={handleActivityChange} />
        <button type="submit" id="btn-search-category">
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Home;
