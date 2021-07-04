
import Block from '../block.js';
import Blockchain from '../blockchain/blockchain.js';

// Initialize Blockchain Button
let initializeBlockchainButton = document.getElementById('initialize-blockchain-button');
// Add Genesis Block button
let addGenesisBlockButton = document.getElementById('add-genesis-block-button');
// Add Block Button
let addBlockButton = document.getElementById('add-block-button');
//Paragraph that we use to output messages to the user
let infoMessage = document.getElementById("information-messages");
//Text area to input data to Blockchain
let inputDataArea = document.getElementById("block-data-insert");
//button to send data to store genesis block
let inputdatabutton = document.getElementById("insert-button");
//button to send data to store general blocks
let inputdatablockbutton = document.getElementById("insert-block-button");

let blockchain = null;
let counter = 1;
// Initializes an empty blockchain
function intializeBlockchain() {
  blockchain = new Blockchain(3);
  infoMessage.innerHTML = "Blockchain initialized!";
  //unable button to start the blockchain and enable the add genesis block button
  initializeBlockchainButton.disabled = true;
  initializeBlockchainButton.classList.add("disabledButton");
  initializeBlockchainButton.classList.remove("navbar-button");
  addGenesisBlockButton.classList.remove("disabledButton");
  addGenesisBlockButton.classList.add("navbar-button");
  addGenesisBlockButton.disabled = false;
  console.log(blockchain.chain[0]);
}

function addDataToGenesisBlock(){
  inputDataArea.style.display = "block";
  inputdatabutton.style.display = "block";
  infoMessage.innerHTML = "Input the data for the genesis block beside:";
}

function addDataToBlock(){
  inputDataArea.style.display = "block";
  inputdatablockbutton.style.display = "block";
  infoMessage.innerHTML = "Input the data for the block beside:";
}

// Adds the genesis block on the blockchain, appends it to a div with class "blockchain-block" and append this div to the section "blockchain-section"
function addGenesisBlock(Blockdata) {
  // Creates the genesis block and append it to the blockhain
  blockchain.createGenesisBlock(Blockdata); 
  // Creates a new div
  let genBlockDiv = document.createElement("div"); 
  // Adds this div to the class "blockchain-block"
  genBlockDiv.classList.add("blockchain-block");
  // Gets the block info
  let blockInfo = blockchain.chain[0].getData();
  // Inserts the block info to the div created
  genBlockDiv.innerHTML = blockInfo;
  // Adds the div to the section "blockchain-section"
  document.getElementById("blockchain-section").appendChild(genBlockDiv);

  //unable button to create genesis block and enable the add block button
  addGenesisBlockButton.disabled = true;
  addGenesisBlockButton.classList.add("disabledButton");
  addGenesisBlockButton.classList.remove("navbar-button");
  addBlockButton.classList.remove("disabledButton");
  addBlockButton.classList.add("navbar-button");
  addBlockButton.disabled = false;
  infoMessage.innerHTML = "Genesis block created!";
  inputDataArea.value = "";
  inputDataArea.style.display = "none";
  inputdatabutton.style.display = "none";
  console.log(blockchain);
}

function addBlock(Blockdata) {
  // Creates a new block and adds it to the blockchain
  counter++;
  let newBlock = new Block(Blockdata);
  blockchain.addBlock(newBlock);
  // Creates a new div with the blockchain-block class and adds it to the section "blockchain-section"
  let newBlockDiv = document.createElement("div");
  newBlockDiv.classList.add("blockchain-block");
  newBlockDiv.innerHTML = blockchain.getLatestBlock().getData();
  document.getElementById("blockchain-section").appendChild(newBlockDiv);
  inputDataArea.value = "";
  inputDataArea.style.display = "none";
  inputdatablockbutton.style.display = "none";
  infoMessage.innerHTML = "The block was successfully created!";
}

initializeBlockchainButton.addEventListener('click', () => intializeBlockchain());
addGenesisBlockButton.addEventListener('click', () => addDataToGenesisBlock());
addBlockButton.addEventListener('click', () => addDataToBlock());
inputdatabutton.addEventListener('click', () => addGenesisBlock(inputDataArea.value));
inputdatablockbutton.addEventListener('click', () => addBlock(inputDataArea.value));
