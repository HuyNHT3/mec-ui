import './App.css';
import { React, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import StatusAlert from './ui/atom/alert/StatusAlert';
import LoadingSpinner from './ui/atom/spinner/LoadingSpinner';
import ReactTrapButton from './ui/atom/react-trap-button/ReactTrapButton';
const Login = lazy(() => import('./ui/organism/login/Login'));
const Home = lazy(() => import('./ui/organism/home/Home'));
const Navigator = lazy(() => import('./features/navigator/Navigator'));
const spinnerArgs = {
  animation: "border"
}
function App() {
  
  return (
    <Router>
      <Suspense fallback={
        <div className="SpinnerContainer">
          <LoadingSpinner {...spinnerArgs} />
        </div>}>
        <Routes>
          <Route path="/"
            element={
              <Home />} />
          <Route path="/Login"
            element={
              <div className="App">
                <Login />
              </div>} />
          <Route path="/Services"
            element={
              <div className="App">
                <Navigator
                  isServiceStation={true}
                />
              </div>} />
          <Route path="/Authentication"
            element={
              <div className="App">
                <StatusAlert
                  openCloseAlert={true}
                  handleCloseAlert={false}
                  title='You must login now!'
                  description='Please return to the home page and do a login'
                  hasCloseButton={false}
                  status={false}
                />
                <Link to='/'>
                  <ReactTrapButton {...{ label: 'Go To Login Page' }} />
                </Link>
              </div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
