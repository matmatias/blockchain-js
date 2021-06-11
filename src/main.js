const Block = require('./block');
const Blockchain = require('./blockchain');

// Creates an empty blockchain
let blockchain = new Blockchain();
blockchain.isChainValid();

// Creates the genesis block
blockchain.createGenesisBlock();

// Creates the second block and adds it to the blockchain
let newBlock = new Block(1, 1, 'Second Block');
blockchain.addBlock(newBlock);

blockchain.printBlockchain();
blockchain.isChainValid();

// Testing the blockchain validity
blockchain.chain[0].data = 'Much money';
blockchain.chain[0].hash = blockchain.chain[0].calculateHash();
blockchain.isChainValid();
console.log(blockchain);

