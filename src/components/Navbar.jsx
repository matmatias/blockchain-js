import React from 'react';
import PropTypes from 'prop-types';
import { Container, Div, Link, Button, Input, H3 } from '../styles/NavbarStyle';
import BlockchainDuck from '../ducks/BlockchainDuck';
import { connect } from 'react-redux';

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

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  initializeBlockchain: (difficulty) => dispatch(
    BlockchainDuck.creators.initializeBlockchain(difficulty),
    alert('Blockchain Initialized')
  )
});

Navbar.propTypes = {
  initializeBlockchain: PropTypes.func,
  blockchainDifficulty: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);