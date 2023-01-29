import React from 'react';
import { Header, TimeLine, Layout } from '../../components';
import ReactAudioPlayer from 'react-audio-player';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import react, { Component } from 'react';
import data from '../../data/data.json';
import WW1 from '../../data/WW1.json';
import WW2 from '../../data/WW2.json';
import * as ReactDOM from 'react-dom';


function Home() {

  return (
      <div className="App">
        <Header/>
        <Layout/>
        <TimeLine data={WW1} />
      </div>
  );
}

export default Home;



