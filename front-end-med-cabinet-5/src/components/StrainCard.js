import React, {useState} from 'react';
//import {Card} from "reactstrap";
import Strain from './Strain';
import {Route} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const StrainCard = ({strains, addToSavedList}) => {

    const [type, setType] = useState("indica");

    console.log(strains);
    console.log(Object.keys(strains).slice(0, 100));
    return (
        <div>
            <Button name='indica' onClick={(event) => setType("indica")}>Indica</Button>
            <Button name='sativa' onClick={(event) => setType("sativa")}>Sativa</Button>
            <Button name='hybrid' onClick={(event) => setType("hybrid")}>Hybrid</Button>
            {Object.keys(strains).slice(0, 20).map((strain, i) => (
                <Route path='/strains' render={() => <Strain strains={strains} strain={strain} key={i} type={type} addToSavedList={addToSavedList} /> } />
            ))}
        </div>
    )
}

export default StrainCard;