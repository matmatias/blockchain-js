import { createStore, combineReducers } from 'redux';
import BlockchainDuck from './BlockchainDuck';
import ChainDuck from './ChainDuck';

const reducers = combineReducers({
  [BlockchainDuck.store]: BlockchainDuck.reducer,
  [ChainDuck.store]: ChainDuck.reducer
});

const store = createStore(reducers);

export default store;