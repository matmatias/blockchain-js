import Block from '../blockchain/block';
import React from 'react';
import PropTypes from 'prop-types';
import { Section, Ul, Li } from '../styles/BlockListStyles';
import { connect } from 'react-redux';

const BlockList = ({chain}) => {
  return (
    <React.Fragment>
      <Section>
        <Ul>
          {
            chain.map((block, idx) => {
              return (
                <Li key={idx}>
                  <h1>{idx == 0 ? 'GENESIS BLOCK' : `BLOCK #${idx}`}</h1>
                  Data: {block.data.toString()}<br/>
                  Parent Hash: {block.parentHash.toString()}<br/>
                  Hash: {block.hash.toString()}<br/>
                  Timestamp: {block.timestamp.toString()}<br/>
                  Nonce: {block.nonce.toString()}<br/>
                </Li>
              )
            })
          }
        </Ul>
      </Section>
    </React.Fragment>
  )
};

const mapStateToProps = store => ({chain: store.blockchain.chain});

const mapDispatchToProps = dispatch => ({});

BlockList.propTypes = {
  chain: PropTypes.array,
  block: PropTypes.instanceOf(Block),
  idx: PropTypes.number
};

BlockList.defaultProps = {
  chain: [],
  block: null,
  idx: 0
};



export default connect(mapStateToProps, mapDispatchToProps)(BlockList);

