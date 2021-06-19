const Block = require("./block");

class Blockchain {
  // Initialize an empty blockchain, must return an empty blockchain (array)
  constructor(difficulty) {
    this.chain = [];
    this.difficulty = difficulty;
  }
  // Creates the first block, must return the genesis block with null parentHash
  createGenesisBlock() {
    let genesisBlock = new Block("Genesis Block");
    genesisBlock.mineBlock(this.difficulty);
    this.chain.push(genesisBlock);
  }
  // Gets the last block, must return the latest block, if blockchain is empty, throws an error
  getLatestBlock() {
    if(this.chain.length == 0) {
      throw "Blockchain does not have any blocks";
    }
    return this.chain[this.chain.length - 1];
  }
  // Add a new block to the blockchain pushing it to the array
  addBlock(newBlock) {
    newBlock.parentHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }
  // Prints all blocks of the blockchain. Does not modify anything about the blockchain
  printBlockchain() {
    for(let i = 0; i < this.chain.length; ++i) {
      console.log(this.chain[i]);
    }
  }

  isChainValid() {
    // Verifies if the blockchain does have any block
    if(this.chain.length == 0) {
      throw "Blockchain does not have any blocks";
    }
    // Verifies if the genesis block hash is valid
    if(this.chain.length == 1) {
      const currentBlock = this.chain.length[0];
      if(currentBlock.hash != currentBlock.calculateHash) {
        throw "The genesis block hash is invalid. The blockchain integrity is compromised";
      }

      return true;
    }
    // Verifies if every block hash and it's parent hash is valid
    for(let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const parentBlock = this.chain[i - 1];
      if(currentBlock.parentHash != parentBlock.hash) {
        throw "One or more block(s) has an invalid hash. The blockchain integrity is compromised";
      }

      return true;
    }
  }
}

module.exports = Blockchain;