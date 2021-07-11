import Duck from 'extensible-duck';
import Blockchain from '../blockchain/blockchain';

export default new Duck({
  namespace: 'blockchain',
  store: 'blockchain',
  types: ['INITIALIZE_BLOCKCHAIN', 'ADD_BLOCK'],
  initialState: { blockchain: new Blockchain(0), chain: [] },

  reducer: (state, action, duck) => {
    let blockchain;

    switch(action.type) {
      case duck.types.INITIALIZE_BLOCKCHAIN:
        blockchain = new Blockchain(action.difficulty);
        return {
          ...state,
          blockchain: blockchain
        };

      case duck.types.ADD_BLOCK:
        blockchain = state.blockchain;
        blockchain.addBlock(action.blockData);
        return {
          ...state,
          blockchain: blockchain,
          chain: [...blockchain.chain]
        }
      
      default:
        return state;
    }
  },

  creators: duck => ({
    initializeBlockchain: difficulty => ({
      type: duck.types.INITIALIZE_BLOCKCHAIN, difficulty
    }),
    addBlock: blockData => ({
      type: duck.types.ADD_BLOCK, blockData
    })
  })
});