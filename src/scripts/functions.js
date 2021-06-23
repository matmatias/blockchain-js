import Block from '../block.js';
import Blockchain from '../blockchain.js';

// Initialize Blockchain Button
let initializeBlockchainButton = document.getElementById('initialize-blockchain-button');
// Add Block button
let addGenesisBlockButton = document.getElementById('add-genesis-block-button');
let blockchain = null;
// Initializes an empty blockchain
function intializeBlockchain() {
  blockchain = new Blockchain(3);
  alert('Blockchain Initialized');
  console.log(blockchain.chain[0]);
}
// Adds the genesis block on the blockchain, appends it to a div with class "blockchain-block" and append this div to the section "blockchain-section"
function addGenesisBlock() {
  // Creates the genesis block and append it to the blockhain
  blockchain.createGenesisBlock(); 
  // Creates a new div
  let genBlockDiv = document.createElement("div"); 
  // Adds this div to the class "blockchain-block"
  genBlockDiv.classList.add("blockchain-block");
  // Gets the block info
  let blockInfo = blockchain.chain[0].getBlockInfo();
  // Inserts the block info to the div created
  genBlockDiv.innerHTML = blockInfo;
  // Adds the div to the section "blockchain-section"
  document.getElementById("blockchain-section").appendChild(genBlockDiv);
  console.log(blockchain);
}

initializeBlockchainButton.addEventListener('click', () => intializeBlockchain());
addGenesisBlockButton.addEventListener('click', () => addGenesisBlock());