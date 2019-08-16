import {
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  FETCH_INITIAL_SMURFS_SUCCESS,
  FETCH_INITIAL_SMURF_DATA
} from '../Actions/smurfAction';

const smurfData = {
  smurfs: [
  ]
}

const smurfReducer = (state = smurfData, action) => {
  switch (action.type) {

    case ADD_SMURF_START:
      return {
        ...state
      }

    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      }

    case FETCH_INITIAL_SMURF_DATA:
      return {
        ...state
      }

    case FETCH_INITIAL_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      }

    case ADD_SMURF_FAILURE:
      return {
        ...state
      }

    default:
      return {
        ...state
      }
  }
}

export default smurfReducer;