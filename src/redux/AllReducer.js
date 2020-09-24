import { combineReducers } from 'redux';

import ContatactReducer from './contactReducer';
import AlertReducer from './alertReducer';

const reducer = combineReducers({
  contactForm: ContatactReducer,
  alerts: AlertReducer,
});

export default reducer;
