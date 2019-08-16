import React from 'react';

const Smurf = ({ smurf }) => {
  return (
    <div className="smurf">
      <p className="smurf-name">{smurf.name}</p>
      <p className="smurf-age">{smurf.age} yrs. old</p>
      <p className="smurf-height">{smurf.height} cms tall</p>
    </div>
  );
}

export default Smurf;