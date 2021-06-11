const Block = require("./block");

class Blockchain {
  // Initialize an empty blockchain
  constructor() {
    this.chain = [];
  }
  // Creates the first block
  createGenesisBlock() {
    this.chain.push(new Block(0, 0, "Genesis Block"));
  }
  // Gets the last block
  getLatestBlock() {
    if(this.chain.length == 0) {
      throw "Blockchain does not have any blocks";
    }
    return this.chain[this.chain.length - 1];
  }
  // Add a new block to the blockchain pushing it to the array
  addBlock(newBlock) {
    newBlock.parentHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
  // Prints all blocks of the blockchain. Does not modify anything about the blockchain
  printBlockchain() {
    for(let i = 0; i < this.chain.length; ++i) {
      console.log(this.chain[i]);
    }
  }
}

module.exports = Blockchain;