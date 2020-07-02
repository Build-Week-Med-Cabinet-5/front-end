import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
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

    export default StrainDetails;
