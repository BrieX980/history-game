import React from 'react';
import { quiz } from './quiz';
import Quiz from 'react-quiz-component';
import Layout from '../layout';
import Header from '../header';
import './styles.css';


function QuizTest() {

  return (
    <div className="App">
      <Header />
      <Layout />
      <Quiz quiz={quiz} />
    </div>
  );
}

export default QuizTest;