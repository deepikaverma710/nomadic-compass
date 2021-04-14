import React from 'react';
import "./Home.css";
import Navigation from '../../components/navigation/Navigation';
import Search from '../../components/activitySearch/Search';


const Home = () => {

  return (
      <div className="hero-image">     
        <Navigation/>
        <Search /> 
      </div>
  );

};

export default Home;