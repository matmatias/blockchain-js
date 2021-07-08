import Duck from 'extensible-duck';
import Blockchain from '../blockchain/blockchain';
import Block from '../blockchain/block';

export default new Duck({
  namespace: 'blockchain',
  store: 'blockchain',
  types: ['INITIALIZE_BLOCKCHAIN', 'CREATE_GENESIS_BLOCK', 'ADD_BLOCK'],
  initialState: { blockchain: null, chain: [] },

  reducer: (state, action, duck) => {
    let blockchain = null;
    switch(action.type) {
      case duck.types.INITIALIZE_BLOCKCHAIN:
        blockchain = new Blockchain(parseInt(action.difficulty));
        return {
          blockchain: blockchain,
          chain: [...state.chain, blockchain.chain]
        };
      case duck.types.CREATE_GENESIS_BLOCK:
        blockchain = state.blockchain;
        blockchain.createGenesisBlock(action.blockData);
        return {
          blockchain: blockchain,
          chain: [ ...state.blockchain.chain, blockchain.chain]
        };
      /*
      case duck.types.ADD_BLOCK:
        const newBlock = new Block(action.blockData);
        blockchain = state.blockchain;
        blockchain.addBlock(newBlock);
        return {
          blockchain: blockchain,
          chain: [ ...state.blockchain.chain, blockchain.chain]
        };
      */
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