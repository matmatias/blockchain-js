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
                  {block.data.toString()}
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

