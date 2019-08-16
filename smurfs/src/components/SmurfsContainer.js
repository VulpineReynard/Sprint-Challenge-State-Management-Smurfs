import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { getInitialSmurfs } from '../Actions/smurfAction';

const SmurfsContainer = (props) => {
props.getInitialSmurfs();
  return (
    <div className="smurf-container">
      {props.smurfs.map((smurf, index) => <Smurf smurf={smurf} key={index}/>)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  { getInitialSmurfs }
)(SmurfsContainer);