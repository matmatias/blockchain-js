import Duck from 'extensible-duck';
import Blockchain from '../blockchain/blockchain';

export default new Duck({
  namespace: 'blockchain',
  store: 'blockchain',
  types: ['INITIALIZE_BLOCKCHAIN'],
  initialState: { blockchain: null},

  reducer: (state, action, duck) => {
    switch(action.type) {
      case duck.types.INITIALIZE_BLOCKCHAIN:
        const blockchain = new Blockchain(action.difficulty);
        return {
          blockchain: [blockchain]
        };
      default:
        return state;
    }
  },

  creators: (duck) => ({
    initializeBlockchain: (difficulty) => ({
      type: duck.types.INITIALIZE_BLOCKCHAIN, difficulty
    })
  })
});