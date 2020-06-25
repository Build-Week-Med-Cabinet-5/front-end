import React, {useEffect, useState} from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import UserCreation from './components/UserCreation';
import Login from "./components/Login";
import StrainCard from './components/StrainCard';
import { Container } from "reactstrap";
import NavBarComponent from "./components/NavBarComponent";

function App() {

  const [strains, setStrains] = useState([]);
  
  useEffect(() => {
    const getStrains = () => {
      axios
        .get('http://strainapi.evanbusse.com/CEIl7eN/strains/search/all')
        .then(response => {
          console.log(response);
          setStrains(response.data);
        })
        .catch(error => {
          console.error('Server Error', error.response);
        });
    }
    getStrains();
  }, []);

  return (
    <Container className="App">
        <NavBarComponent />
      <Route exact path='/'>
        <Link to='/login'>Log in</Link>
      </Route>
        <Route exact path='/login'>
            <Login />
        </Route>
      <Route exact path='/signup'>
        <UserCreation />
      </Route>
      <Route path='/strains' render= { () => <StrainCard strains={strains} />} />
      <Route path='/strains/:strain' />
    </Container>
  );
}

export default App;
