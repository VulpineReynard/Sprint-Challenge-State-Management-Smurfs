import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../Actions/smurfAction';

const AddSmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({
    name: '',
    age: '',
    height: ''
  });

  const handleChanges = (event) => {
    setNewSmurf({
      ...newSmurf,
      [event.target.name]: event.target.value
    })
    console.log(newSmurf);
  }

  return (
    <form onSubmit={(e) => {
        e.preventDefault(); 
        props.addSmurf(newSmurf);
        }
      } 
      className="smurf-form">
      <h3>Add Your Own Smurf!</h3>
      <div className="smurf-form-input-container">

        <input 
        name="name"
        onChange={(e) => handleChanges(e)} 
        value={newSmurf.name} 
        placeholder="New Smurf's Name" 
        required
        />

        <input 
        name="age"
        onChange={(e) => handleChanges(e)} 
        value={newSmurf.age} 
        placeholder="New Smurf's Age" 
        required
        />

        <input 
        name="height"
        onChange={(e) => handleChanges(e)} 
        value={newSmurf.height} 
        placeholder="New Smurf's Height"
        required
        />

      </div>
      <button>
        Add New Smurf!
      </button>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  { addSmurf }
)(AddSmurfForm);