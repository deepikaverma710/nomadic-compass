import React from 'react';
import "./Home.css";
import { getAllActivities, addNewActivity } from '../../network';
import Navigation from '../../components/navigation/Navigation';
import Search from '../../components/activitySearch/Search';


const Home = () => {
  const onClickActivity= async()=>{
   const act=  await getAllActivities();
  act.map(a=>console.log(a.activityName))
  }

  return (
    <div className="hero-image">
      <div >  
      <button onClick={onClickActivity}>Get All Activities</button>
      <button onClick={addNewActivity}>Get All Activities</button>   
        <Navigation />
        <Search />      
      </div>
      <div className="footer">Footer</div>
      </div>
  );

};

export default Home;