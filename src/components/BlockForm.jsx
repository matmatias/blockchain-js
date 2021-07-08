import React from 'react';
import PropTypes from 'prop-types';
import { Container, Div, Button } from '../styles/BlockFormStyles';
import BlockchainDuck from '../ducks/BlockchainDuck';
import { connect } from 'react-redux';

const BlockForm = ({addBlock}) => {
  
  const [blockData, setBlockData] = React.useState("");

  return (
    <React.Fragment>
      <Container>
        <Div>
          <h2>Data</h2>
          <input
            type="text"
            value={data}
            onChange={(evt) => {
              setBlockData(evt.target.value);
            }}
          >
          </input>
        </Div>

        <Button
          onClick={() => {
            addBlock(blockData);
          }}
        >
          ADD NEW BLOCK
        </Button>
      </Container>
    </React.Fragment>
  )
}

const mapStateToProps = (store) => {
  return {
    blockchain: store.blockchain.blockchain,
    chain: store.blockchain.chain
  }
};

const mapDispatchToProps = (dispatch) => ({
  addBlock: (blockData) => dispatch(
    BlockchainDuck.creators.addBlock(blockData),
  )
});

BlockForm.propTypes = {
  addBlock: PropTypes.func,
  data: PropTypes.string
};



export default connect(mapStateToProps, mapDispatchToProps)(BlockForm);