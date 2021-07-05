import React from 'react';
import PropTypes from 'prop-types';
import { Container, Div, Link, Button, Input, H3 } from '../styles/NavbarStyle';
const Navbar = ({initializeBlockchain}) => {
  const [blockchainDifficulty, setBlockchainDifficulty] = React.useState(0);

  return (
    <React.Fragment>
      <Container>
        <Link href="#">Blockchain Viewer</Link>

        <Div>
          <H3>Blockchain Initial Difficulty</H3>
          <Input
            type="number"
            value={blockchainDifficulty}
            onChange={(evt) => {
              setBlockchainDifficulty(evt.target.value);
            }}
          >
          </Input>
          <Button
            onClick={() => {
              initializeBlockchain(parseInt(blockchainDifficulty));
            }}
          >
            Initialize Blockchain
          </Button>
        </Div>
      </Container>
    </React.Fragment>
  )
}

Navbar.propTypes = {
  initializeBlockchain: PropTypes.func,
  blockchainDifficulty: PropTypes.number
};

export default Navbar;