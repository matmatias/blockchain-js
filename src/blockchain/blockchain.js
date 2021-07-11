import Block from './block.js';

class Blockchain {
  constructor(difficulty) {
    this.chain = [];
    this.difficulty = difficulty;
  }
  
  getLatestBlock() {
    if(this.chain.length == 0) {
      throw 'Blockchain does not have any blocks';
    }
    return this.chain[this.chain.length - 1];
  }
  
  addBlock(blockData) {
    if(this.chain.length == 0) {
      const genesisBlock = new Block(blockData);
      genesisBlock.mineBlock(this.difficulty);
      this.chain.push(genesisBlock);
    } else {
      const genericBlock = new Block(blockData);
      genericBlock.parentHash = this.getLatestBlock().hash;
      genericBlock.mineBlock(this.difficulty);
      this.chain.push(genericBlock);
    }
  }
  
}

export default Blockchain;