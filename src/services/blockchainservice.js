import Blockchain from '../blockchain/blockchain';

export class BlockchainService {
  constructor() {
    this.blockchain = undefined;
    this.initialized = false;
  }

  initialze = (difficulty) => {
    this.blockchain = new Blockchain(difficulty);
    this.initialized = true;
  };

  addBlock = (data) => {
    if(this.blockchain !== undefined) {
      this.blockchain.addBlock(data);
      return this.blockchain.chain;
    }
  };

  isInitialized = () => this.initialized;
  getChain = () => this.blockchain.chain;

}