import { createStore } from 'redux';

import AllReducer from './AllReducer';

const Store = createStore(
  AllReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;
