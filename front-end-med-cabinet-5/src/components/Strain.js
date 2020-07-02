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
