import React, {useContext} from 'react';
import {firebaseAuth} from '../context/ContextIndex'

const Home = (props) => {
    const {onLogOutClicked} = useContext(firebaseAuth)
  return (
    <div>
      Welcome!
      <button onClick={onLogOutClicked}>sign out </button>
    </div>
  );
};

export default Home;