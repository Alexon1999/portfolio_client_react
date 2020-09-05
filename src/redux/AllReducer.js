import { combineReducers } from 'redux';

import ContatactReducer from './contactReducer';

const reducer = combineReducers({
  contactForm: ContatactReducer,
});

export default reducer;
