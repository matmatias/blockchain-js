import { createStore, combineReducers } from 'redux';
import BlockchainDuck from './BlockchainDuck';

const reducers = combineReducers({
  [BlockchainDuck.store]: BlockchainDuck.reducer
});

const store = createStore(reducers);

export default store;