import React from 'react';
import Blockchain from '../blockchain/blockchain';
import Block from '../blockchain/block';
import Navbar from './Navbar';
import BlockForm from './BlockForm';
import BlockList from './BlockList';

const App = (props) => {
  const [blockchain, setBlockchain] = React.useState(null);
  const [chain, setChain] = React.useState([]);
  return (
    <React.Fragment>
      <Navbar
        initializeBlockchain={(blockchainDifficulty) => {
          setBlockchain(new Blockchain(blockchainDifficulty));
          alert("Blockchain Initialized")
          console.log(blockchain);
        }}
      />
      <BlockForm
        addBlock={(blockData) => {
          const newBlock = new Block(blockData);
          {
            blockchain.chain.length == 0 ?
            blockchain.createGenesisBlock(blockData) : blockchain.addBlock(newBlock);
            setChain([...blockchain.chain], newBlock);
          }
          console.log(chain);
        }}
      />
      
      <BlockList
        chain={chain}
      />

    </React.Fragment>
  )
};

export default App;
