import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import UserCreation from './components/UserCreation';
import Login from "./components/Login";
import StrainCard from './components/StrainCard';
import { Container } from "reactstrap";
import NavBarComponent from "./components/NavBarComponent";
import SavedStrain from './components/SavedStrain';
import StrainDetails from './components/StrainDetails';
import PrivateRoute from './components/PrivateRoute';
import {UserContext} from "./context/UserContext";
import {StrainContext} from "./context/StrainContext";
import StrainRecommender from "./components/StrainRecommender";
import ProfilePage from "./components/ProfilePage";

function App(props) {
  const [strains, setStrains] = useState([]);
  const [strain, setStrain] = useState([]);
  const [savedList, setSavedList] = useState([]);
  
  useEffect(() => {
    const getStrains = () => {
      axios
        .get('http://strainapi.evanbusse.com/CEIl7eN/strains/search/all')
        .then(response => {
          setStrains(response.data);
        })
        .catch(error => {
          console.error('Server Error', error.response);
        });
    }
    getStrains();
  }, []);


console.log(strains)

  useEffect(() => {
    setStrain(Object.keys(strains).slice(0, 20))
  }, [strains])

  const addToSavedList = strain => {
    setSavedList([...savedList, strain]);
    console.log(savedList);
  };

  const removeFromSavedList = (strain) => {
    let x = savedList.filter(element => `${element}` !== `${strain}`);
    console.log(x)
    setSavedList(x)
  }

  const editSavedStrain = (event) => {
    event.preventDefault();
    setSavedList(strain === event.target.value)
  }

  return (
    <Container className="App">
        <NavBarComponent />
        <Switch>
          {/* <PrivateRoute path='/strains' component={StrainCard} />
          <PrivateRoute path='/strains/:strain' /> */}
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
            <Route exact path='/profile' component={ProfilePage} />
          </UserContext.Provider>
        </Switch>
      <Route exact path='/strains' render= { () => <StrainCard strains={strains} />} />
      <Route exact path='/strains/:strain' render = {(props) => <StrainDetails {...props} strains={strains} addToSavedList={addToSavedList} savedList={savedList} />} />
      <Route exact path='/savedstrains' render = {(props) => <SavedStrain {...props} savedList={savedList} setSavedList={setSavedList} removeFromSavedList={removeFromSavedList} editSavedStrain={editSavedStrain} /> } />
    </Container>
  );
}

export default App;
