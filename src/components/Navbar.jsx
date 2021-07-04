import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({initializeBlockchain}) => {
  const [blockchainDifficulty, setBlockchainDifficulty] = React.useState(0);

  return (
    <React.Fragment>
      <div>
        <div>
          <a href="#">Blockchain Viewer</a>
        </div>
        <div>
          <h2>Blockchain Initial Difficulty</h2>
          <input
            type="number"
            value={blockchainDifficulty}
            onChange={(evt) => {
              setBlockchainDifficulty(evt.target.value);
            }}
          >
          </input>
          <button
            onClick={() => {
              initializeBlockchain(parseInt(blockchainDifficulty));
            }}
          >
            Initialize Blockchain
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

Navbar.propTypes = {
  initializeBlockchain: PropTypes.func,
  blockchainDifficulty: PropTypes.number
};

export default Navbar;