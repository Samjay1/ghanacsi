import React, { Suspense } from 'react';
import './App.css';
import Welcome from './Screens/Welcome';
import QuestionPage1 from './Screens/QuestionPage1';
import QuestionPage2 from './Screens/QuestionPage2';
import QuestionPage3 from './Screens/QuestionPage3';
import QuestionPage4 from './Screens/QuestionPage4';
import QuestionPage5 from './Screens/QuestionPage5';
import QuestionPage6 from './Screens/QuestionPage6';
import QuestionPage7 from './Screens/QuestionPage7';
import ThankYou from './Screens/ThankYou';
import Test from './Screens/Test';
import useFetch from './Networks/GetData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  useFetch();
  return(
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/index" element={<Welcome />} />
        <Route path="/question1" element={<QuestionPage1 />} />
        <Route path="/question2" element={<QuestionPage2 />} />
        <Route path="/question3" element={<QuestionPage3 />} />
        <Route path="/question4" element={<QuestionPage4 />} />
        <Route path="/question5" element={<QuestionPage5 />} />
        <Route path="/question6" element={<QuestionPage6 />} />
        <Route path="/question7" element={<QuestionPage7 />} />
        <Route path="/final" element={<ThankYou />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Suspense>
  </Router>
  );
}

export default App;
