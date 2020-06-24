import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter} from 'react-router-dom';
import UserCreation from './components/UserCreation';
import Login from "./components/Login";
import { Container } from "reactstrap";
import NavBarComponent from "./components/NavBarComponent";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePage from "./components/ProfilePage";
import StrainSearch from "./components/StrainSearch";
import {StrainContext} from './Context/StrainContext';
import {UserContext} from "./Context/UserContext";

function App() {


  return (
      <Router>
          <Container className="App">
              <NavBarComponent />
              <Switch>
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
                  <StrainContext.Provider value={null}>
                      <PrivateRoute exact path='/search' component={StrainSearch}/>
                  </StrainContext.Provider>
              </Switch>

          </Container>
      </Router>

  );
}

export default App;
