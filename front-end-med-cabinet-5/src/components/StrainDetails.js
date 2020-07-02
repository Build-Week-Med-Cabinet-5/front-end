import React, {useState, useEffect} from 'react';
<<<<<<< HEAD
import {Card} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {Button} from "react-bootstrap";


const StrainDetails = (props) => {
    const [details, setDetails] = useState([]);
    const [strain, setStrain] = useState([]);

    useEffect(() => {
        if(props.strains !== undefined) {
           setDetails(props.strains[props.match.params.strain]);
           console.log(props.match.params.strain)
           console.log(props.strains)
        }
    }, [props.match.params.strain, props.strains])

    console.log('props.strains', props.strains)
    console.log(props.match.params.strain)
    console.log(details)

    useEffect(() => {
        setStrain(props.match.params.strain);
    }, [strain, props.match.params.strain])

    console.log('strain:', strain)

    const saveStrain = () => {
        const addToSavedList = props.addToSavedList;
        addToSavedList(strain)
    }

    return (
            <div className='container'>
                <Card>
                    <div className="strain-card">
                        <div className='name'>
                            {props.match.params.strain}
                        </div>
                        <div className='id'>
                            ID: 19
                        </div>
                        <div className='type'>
                            Type: Indica    
                        </div> 
                        <div className='flavors'>
                            Flavors: Earthy, Ammonia, Diesel
                        </div>
                        <div className='effects'>
                            Medical effects: Depression, Insomnia, Pain, Stress, Lack of Appetite <br />
                            Negative Effects: Dizzy, Dry Mouth <br />
                            Positive Effects: Relaxed, Euphoric, Sleepy, Focused, Giggly
                        </div>
                        {/* <div className='id'>
                            ID: {details.id.toString()}
                        </div> */}
                        {/* <div className='type'>
                            Type: {details.race.toString()}
                        </div>
                        <div className='flavors'>
                            Flavors: {details.flavors.toString()}
                        </div>
                        <div className='effects'>
                            Medical effects: {details.effects.medical.toString()} <br />
                            Positive effects: {details.effects.positive.toString()} <br />
                            Negative effects: {details.effects.negative.toString()} <br />
                        </div> */}
                        <Button className='save' onClick={saveStrain}>Save</Button>
                    </div>
                </Card>
            </div>
        )
    }

    export default withRouter(StrainDetails);
=======
import {Link, Route} from 'react-router-dom';
import {Card} from 'reactstrap';

const StrainDetails = ({strain, strains, type}) => {
    //const {Strain, id, type, flavors, effects} = strain;
    //console.log(card[`${strain}`])
    const [filteredStrains, setFilteredStrains] = useState([]);
    const [clicked, setClicked] = useState([]);
    let x = strains[`${strain}`];
    console.log(x)

    const filterStrains = () => {
        if(x.race === type) {
            //carta.style.display = 'none';
            setFilteredStrains(strain);
        }
    }

    const click = () => {
        setClicked(strain);
    }

    console.log(clicked);

    const Strain = ({x, strain}) => {
        const [y, setY] = useState(x);

        useEffect(() => {
            setY(x);
        }, [y])

        return (
            <Card>
                <div className="strain-card">
                    <div className='name'>
                        {strain}
                    </div>
                    <div className='id'>
                        ID: {x.id.toString()}
                    </div>
                    <div className='type'>
                        Type: {x.race.toString()}
                    </div>
                    <div className='flavors'>
                        Flavors: {x.flavors.toString()}
                    </div>
                    <div className='effects'>
                        Medical effects: {x.effects.medical.toString()} <br />
                        Positive effects: {x.effects.positive.toString()} <br />
                        Negative effects: {x.effects.negative.toString()} <br />
                    </div>
                </div>
            </Card>
        )
    }

    useEffect(() => {
        filterStrains();
    }, [type])
    console.log(filteredStrains);

    return (
        <div className='container'>
            <Link to={`/strains/${strain}`} onClick={click}>
                <Card className='card'>
                    <div className="strain-card">
                        <div className="strain">
                            {filteredStrains}
                        </div>
                    </div>
                </Card>
            </Link>
            <Route exact path='/strains/:strain' render={() => <Strain strain={strain} x={x} />} />
        </div>
    )
}

export default StrainDetails;
>>>>>>> 2510ff15d58ec914859f478d8f3d8002726eff0c
