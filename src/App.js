import React, { createContext, useReducer } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import QuizTest from './components/quiz';
import Header from './components/header';
import Contact from './components/contacts';
import Layout from './components/layout';
import './App.css';
import { computeHeadingLevel } from '@testing-library/react';


function App() {
  return (

<>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/quiz" element={<QuizTest />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
