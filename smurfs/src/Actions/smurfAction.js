import axios from 'axios';
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";
export const FETCH_INITIAL_SMURF_DATA = "FETCH_INITIAL_SMURF_DATA";
export const FETCH_INITIAL_SMURFS_SUCCESS = "FETCH_INITIAL_SMURFS_SUCCESS";

export const getInitialSmurfs = () => dispatch => {
  dispatch({ type: FETCH_INITIAL_SMURF_DATA })
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: FETCH_INITIAL_SMURFS_SUCCESS, payload: res.data })
    })
}

export const addSmurf = (newSmurf) => dispatch => {
  dispatch({ type: ADD_SMURF_START })
  axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_SMURF_FAILURE })
    })
}