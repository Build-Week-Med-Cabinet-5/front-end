import React, {useState, useEffect} from 'react';
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