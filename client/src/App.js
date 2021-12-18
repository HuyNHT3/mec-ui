import './App.css';
import { React, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingSpinner from './ui/atom/spinner/LoadingSpinner';
const Login = lazy(() => import('./ui/organism/login/Login'));
const Home = lazy(() => import('./ui/organism/home/Home'));
const ServiceStation = lazy(() => import('./ui/organism/services-page/ServiceStation'));
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
                <ServiceStation />
              </div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
