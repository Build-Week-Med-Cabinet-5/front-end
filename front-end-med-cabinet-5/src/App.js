import React, {useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserCreation from './components/UserCreation';
import Login from "./components/Login";
import { Container } from "reactstrap";
import NavBarComponent from "./components/NavBarComponent";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePage from "./components/ProfilePage";
import {UserContext} from "./Context/UserContext";
import axios from "axios";
import StrainCard from "./components/StrainCard";
import StrainRecommender from "./components/StrainRecommender";

function App() {


  return (
      <Router>
          <Container className="App">
              <NavBarComponent />
              <Switch>
                  <PrivateRoute path='/strains' component={StrainCard}/>
                  <PrivateRoute path='/strains/:strain' />
                  <Route exact path='/'>
                      <Login />
                  </Route>
                  <Route exact path='/login'>
                      <Login />
                  </Route>
                  <Route exact path='/signup'>
                      <UserCreation />
                  </Route>
                  <UserContext.Provider value={null}>
                      <PrivateRoute exact path="/profile" component={ProfilePage}/>
                  </UserContext.Provider>


              </Switch>

          </Container>
      </Router>

  );
}

export default App;
