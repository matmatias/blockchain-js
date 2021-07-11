import React from 'react';
import Navbar from './Navbar';
import BlockForm from './BlockForm';
import BlockList from './BlockList';
import { GlobalStyle, FlexContainer } from '../styles/GlobalStyles';

const App = () => {
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
