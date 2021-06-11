const Block = require('./block');
const Blockchain = require('./blockchain');

// Creates an empty blockchain
let blockchain = new Blockchain();
// console.log(blockchain);

// Creates the genesis block
blockchain.createGenesisBlock();
// Creates the second block and adds it to the blockchain
let newBlock = new Block(1, 1, 'Second Block');
blockchain.addBlock(newBlock);

blockchain.printBlockchain();

