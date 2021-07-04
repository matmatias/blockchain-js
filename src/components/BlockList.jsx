import React from 'react';
import PropTypes from 'prop-types';
import Block from '../blockchain/block';

const BlockList = ({chain}) => {
  return (
    <React.Fragment>
      <section>
        <ul>
          {
            chain.map((block, idx) => {
              return (
                <li key={idx}>
                  Data: {block.data.toString()}<br/>
                  Parent Hash: {block.parentHash.toString()}<br/>
                  Hash: {block.hash.toString()}<br/>
                  Timestamp: {block.timestamp.toString()}<br/>
                  Nonce: {block.nonce.toString()}<br/>
                </li>
              )
            })
          }
        </ul>
      </section>
    </React.Fragment>
  )
};

BlockList.propTypes = {
  chain: PropTypes.array,
  block: PropTypes.instanceOf(Block)
};

BlockList.defautProps = {
  chain: [],
  block: null
};

export default BlockList

