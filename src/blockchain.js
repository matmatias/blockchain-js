const Block = require("./block");

class Blockchain {
  // Initialize an empty blockchain
  constructor() {
    this.head = null;
  }
  // Creates the first block
  createGenesisBlock() {
    this.head = new Block(0, 0, "Genesis Block")
    // Temporary fix to print the blockchain
    console.log(this.head);
  }
  // Gets last block
  getHead() {
    return this.head;
  }
  // Add a new block to the blockchain and updates the head reference to be the last block included
  addBlock(newBlock) {
    newBlock.parentHash = this.getHead().hash;
    newBlock.hash = newBlock.calculateHash();
    this.head = newBlock;
    // Temporary fix to print the blockchain
    console.log(this.head);
  }
  /* UNUSED UNTIL THERE IS A BETTER SOLUTION TO PRINT ALL BLOCKS OF THE BLOCKCHAIN
  // Prints all blocks of the blockchain. Does not modify anything about the blockchain
  printBlockchain() {
    let printPointer = this;
    while(printPointer !== null) {
      console.log(printPointer.head);
      printPointer = Block.verifyBlock(printPointer.parentHash);
    }
  }
  */
}

module.exports = Blockchain;