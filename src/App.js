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
import ErrorPage from './Screens/ErrorPage';
import Message from './Screens/Message';
// import Test from './Screens/Test';
import useFetch from './Networks/GetData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }
  
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <ErrorPage/>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}


function App() {
  useFetch();
  return(
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/index" element={<Welcome />} />
        <Route path="/question1" element={
        <ErrorBoundary>
          <QuestionPage1 />
        </ErrorBoundary>
        } />
        <Route path="/question2" element={
            <ErrorBoundary>
              <QuestionPage2 />
            </ErrorBoundary>
          } />
        <Route path="/question3" element={
            <ErrorBoundary>
              <QuestionPage3 />
            </ErrorBoundary>
          } />
        <Route path="/question4" element={
            <ErrorBoundary>
              <QuestionPage4 />
            </ErrorBoundary>} />
        <Route path="/question5" element={
            <ErrorBoundary>
              <QuestionPage5 />
            </ErrorBoundary>} />
        <Route path="/question6" element={
              <ErrorBoundary>
              <QuestionPage6 />
            </ErrorBoundary>} />
        <Route path="/question7" element={
              <ErrorBoundary>
              <QuestionPage7 />
            </ErrorBoundary>} />
        <Route path="/final" element={
            <ErrorBoundary>
            <ThankYou />
          </ErrorBoundary>} />
        <Route path="/message" element={
          <ErrorBoundary>
              <Message />
          </ErrorBoundary>} />
        {/* <Route path='/*' element={<ErrorPage/>}/> */}

        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
    </Suspense>
  </Router>
  );
}

export default App;
