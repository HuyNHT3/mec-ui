import './App.css';
import { React, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
const Login = lazy(() => import('./ui/organism/login/Login'));
const Home = lazy(() => import('./ui/organism/home/Home'));
function App() {
  return (

    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/"
            element={
              <Home />} />
          <Route path="/Login"
            element={
              <div className="App">
                <Login />
              </div>} />
        </Routes>
      </Suspense>
    </Router>

    // <Router>
    //   <Routes>
    //     <Route exact path="/Login" component={Login} />
    //      <Route exact path="/" component={Home}/> 
    //   </Routes>
    //   <div className="App">
    //     <Link to="/Login">
    //       <Login />
    //     </Link>
    //     <Link to="/">
    //       <Home/>
    //     </Link>
    //   </div>
    // </Router>
  );
}

export default App;
