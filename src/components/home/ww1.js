import React from 'react'; 
import {Header, TimeLine} from '../components';
import ww1 from '../data/WW1.json';

function WW1() {
  
  return (
    <div>
      <Header />
      <TimeLine data={ww1} />
    </div>
  );
}

export default ww1;
