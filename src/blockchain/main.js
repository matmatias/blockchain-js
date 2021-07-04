// import Block from './block';
// import Blockchain from './blockchain';
const Block = require('./block');
const Blockchain = require('./blockchain');

// Creates an empty blockchain
let blockchain = new Blockchain(difficulty = 3);


// Creates the genesis block
blockchain.createGenesisBlock();
// Creates the second block and adds it to the blockchain
let newBlock = new Block('Block 1');
// Mining block 1
console.log('Mining block 1...');
blockchain.addBlock(newBlock);

newBlock = new Block('Block 2');
// Mining block 2
console.log('Mining block 2...');
blockchain.addBlock(newBlock);

blockchain.difficulty = 3;
newBlock = new Block('Block 3');
// Mining block 3
console.log('Mining block 3...')
blockchain.addBlock(newBlock);

blockchain.printBlockchain();
