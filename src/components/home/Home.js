import React from 'react';
import "../home/Home.css";
import Navigation from '../navigation/Navigation';
import Search from '../activitySearch/Search';


const Home = () => {

  return (
      <div className="hero-image">     
        <Navigation/>
        <Search /> 
      </div>
  );

};

export default Home;