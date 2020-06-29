import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {Button} from "react-bootstrap";

const SavedStrain = (props) => {
  const [editing, setEditing] = useState(false)
  console.log(props.savedList);
  console.log(editing);

  const removeResponse = (strain) => {
    const removeFromSavedList = props.removeFromSavedList;
    removeFromSavedList(strain)
  }

  const handleKeyDown = (e, strain) => {
    if(e.key === 'Enter') {
      name.textContent = e.target.value;
    }
  }

  console.log(props)
  const name = document.querySelector('.name')
  console.log(name);


  return (
    <div className="saved-list">
      <h3> Saved Strains: </h3>

      {props.savedList.map(strain => (
        <div>
          <NavLink to={`/strains/${strain}`}>
            <span className='name'> {strain} </span>
          </NavLink>
          <Button className='delete' onClick={removeResponse}>Delete</Button>
          <Button className='edit' onClick={() => {setEditing(true)}}>Edit</Button>
          {editing ? (<input type='text' defaultValue={strain} onKeyDown={handleKeyDown} />) : console.log('hi') }
        </div>
      ))}
      
    </div>
  )
}
 
export default SavedStrain;