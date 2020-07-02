<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Card} from 'reactstrap';
//import SavedStrain from "./SavedStrain";

const Strain = ({strain, strains, type}) => {
    const [filteredStrains, setFilteredStrains] = useState([]);
    
    let x = strains[`${strain}`];

    const filterStrains = () => {
        if(x.race === type) {
            setFilteredStrains(strain);
        }
    }

    console.log(filteredStrains)

    useEffect(() => {
        filterStrains(); 
    }, [type, x.race])

    return (
        <div className='filteredContainer'>
            <Card className='card'>
                <Link to={`/strains/${strain}`}>
                    <div className="strain-card">
                        <div className="strain">
                            {`${filteredStrains}`} 
                        </div>
                    </div>
                </Link> 
            </Card> 
        </div>    
    )
}

export default Strain;
=======
// import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
// import {Card} from 'reactstrap';

// const Strain = ({strain, card}) => {

//     const [type, setType] = useState('Sativa');
//     //const {Strain, id, type, flavors, effects} = strain;
//     //console.log(card[`${strain}`])
//     let x = card[`${strain}`];
//     return (

//     )
// }

// export default Strain;
>>>>>>> 2510ff15d58ec914859f478d8f3d8002726eff0c
