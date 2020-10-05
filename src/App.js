import "firebase/auth";
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Addevents from "./components/AddEvents/Addevents";
import Admin from "./components/Pages/Admin/Admin";
import Events from "./components/Pages/Events/Events";
import Header from "./components/Pages/Header/Header";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import PrivateRouter from "./components/Pages/PrivateRounter/PrivateRouter";
import Register from "./components/Pages/Register/Register";
import VolEventsReg from "./components/VolunteerList/VolEventsReg";





export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRouter path="/register/:volname">
            <Register></Register>
          </PrivateRouter>
          <PrivateRouter path="/admin">
            <Admin></Admin>
          </PrivateRouter>
          <Route path="/events">
            <Events></Events>
          </Route>
          <Route path="/eventsReg">
            <Addevents></Addevents>
          </Route>
          <Route path="/volList">
            <VolEventsReg></VolEventsReg>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
