import Duck from 'extensible-duck';
import Blockchain from '../blockchain/blockchain';
import Block from '../blockchain/block';

export default new Duck({
  namespace: 'blockchain',
  store: 'blockchain',
  types: ['INITIALIZE_BLOCKCHAIN', 'ADD_BLOCK', 'CHAIN'],
  initialState: { blockchain: null, chain: [] },

  reducer: (state, action, duck) => {
    let blockchain = null;
    switch(action.type) {
      case duck.types.INITIALIZE_BLOCKCHAIN:
        blockchain = new Blockchain(parseInt(action.difficulty));
        return {
          blockchain: blockchain,
          chain: [ ...state.chain, blockchain.chain ]
        };

      case duck.types.ADD_BLOCK:
        blockchain = state.blockchain;
        const newBlock = new Block(action.blockData);
        blockchain.chain.length == 0 ?
          blockchain.createGenesisBlock(action.blockData) :
          blockchain.addBlock(newBlock);
        return {
          blockchain: blockchain,
          chain: [ ...state.blockchain.chain, blockchain.chain ]
        };

      case duck.types.CHAIN:
        return {
          chain: state.chain
        };
      default:
        return state;
    }
  },

  creators: (duck) => ({
    initializeBlockchain: (difficulty) => ({
      type: duck.types.INITIALIZE_BLOCKCHAIN, difficulty
    }),
    addBlock: (blockData) => ({
      type: duck.types.ADD_BLOCK, blockData
    }),
    chain: (chain) => ({
      type: duck.types.CHAIN
    })
  })
});