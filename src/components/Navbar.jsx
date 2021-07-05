import React from 'react';
import PropTypes from 'prop-types';
import { Container, Div, Link, Button } from '../styles/NavbarStyle';
const Navbar = ({initializeBlockchain}) => {
  const [blockchainDifficulty, setBlockchainDifficulty] = React.useState(0);

  return (
    <React.Fragment>
      <Container>
        <Link href="#">Blockchain Viewer</Link>

        <Div>
          <h3>Blockchain Initial Difficulty</h3>
          <input
            type="number"
            value={blockchainDifficulty}
            onChange={(evt) => {
              setBlockchainDifficulty(evt.target.value);
            }}
          >
          </input>
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