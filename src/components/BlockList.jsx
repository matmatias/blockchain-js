import React from 'react';
import PropTypes from 'prop-types';
import Block from '../blockchain/block';
import { Section, Ul, Li } from '../styles/BlockListStyles';

const BlockList = ({chain}) => {
  return (
    <React.Fragment>
      <Section>
        <Ul>
          {
            chain.map((block, idx) => {
              return (
                <Li key={idx}>
                  <h1>{idx == 0 ? "GENESIS BLOCK" : `BLOCK #${idx}`}</h1>
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

BlockList.propTypes = {
  chain: PropTypes.array,
  block: PropTypes.instanceOf(Block)
};

BlockList.defautProps = {
  chain: [],
  block: null
};

export default BlockList

