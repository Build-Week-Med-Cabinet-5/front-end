import React, {useState, useEffect} from 'react';
//import {Card} from "reactstrap";
import StrainDetails from './StrainDetails';
import {Route} from 'react-router-dom';
import {Button} from 'reactstrap';
import axios from "axios";

const StrainCard = () => {

    const [type, setType] = useState("indica");

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

    console.log(strains);
    //console.log(Object.keys(strains).slice(0, 100));
    return (
        <div>
            <Button name='indica' onClick={() => setType("indica")}>Indica</Button>
            <Button name='sativa' onClick={() => setType("sativa")}>Sativa</Button>
            <Button name='hybrid' onClick={() => setType("hybrid")}>Hybrid</Button>
            {Object.keys(strains).slice(0, 20).map((strain, i) => (
                <Route path='/strains' render={() => <StrainDetails className='strainDetails' strains={strains} strain={strain} key={i} type={type} /> } />
            ))}
        </div>
    )
}

export default StrainCard;