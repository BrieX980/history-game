import React from 'react'; 
import {Header, TimeLine} from '../components';
import ww2 from '../data/WW2.json';

function WW2() {
  
  return (
    <div>
      <Header />
      <TimeLine data={ww2} />
    </div>
  );
}

export default ww2;
