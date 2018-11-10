import { FETCHING, FETCHING_SMURFS, ERROR } from '../actions';
/*
	Be sure to import in all of the action types from `../actions`
*/

const initialState = {
	smurfs: [],
	fetching: false,
	error: '',
}

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCHING:
			return Object.assign({}, state, {fetching: true });
		
		case FETCHING_SMURFS:
			return Object.assign({}, state, { smurfs: action.smurfs, fetching: false, error: '' });

		case ERROR:
			return Object.assign({}, state, { error: action.errorMessage, fetching: false });

		default:
			return state;
	}
};

/*
	You'll only need one smurf reducer for this project.
	Feel free to export it as a default and import as rootReducer. 
	This will guard your namespacing issues.
	There is no need for 'combineReducers' in this project.
	Components can then read your store as, `state` and not `state.fooReducer`.
*/
