import React from 'react';
import Blockchain from '../blockchain/blockchain';
import Block from '../blockchain/block';
import Navbar from './Navbar';
import BlockForm from './BlockForm';
import BlockList from './BlockList';
import { GlobalStyle, FlexContainer } from '../styles/GlobalStyles';

const App = (props) => {
  // const [blockchain, setBlockchain] = React.useState(null);
  // const [chain, setChain] = React.useState([]);
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />

      <FlexContainer>
        <BlockList />

        <BlockForm />
      </FlexContainer>


    </React.Fragment>
  )
};

export default App;
