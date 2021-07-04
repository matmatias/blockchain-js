import React from 'react';
import PropTypes from 'prop-types';
import Block from '../blockchain/block';

const BlockList = ({chain}) => {
  const [data, setData] = React.useState("");
  const [timestamp, setTimestamp] = React.useState("");
  const [parentHash, setParentHash] = React.useState("");
  const [hash, setHash] = React.useState("");
  const [nonce, setNonce] = React.useState("");

  return (
    <React.Fragment>
      chain.map((block, index) => {
        setData(block.data);
        setTimestamp(block.timestamp);
        setParentHash(block.parentHash);
        setHash(block.hash);
        setNonce(block.nonce);
        return (
          <section>
            <ul>
              return (
                <li key={index}>
                  Data: {data}
                  Timestamp: {timestamp}
                  Parent Hash: {parentHash}
                  Hash: {hash}
                  Nonce: {nonce}
                </li>
              );
            </ul>
          </section>
        );
      })
    </React.Fragment>
  );

};

BlockList.propTypes = {
  chain: PropTypes.array,
  block: PropTypes.instanceOf(Block)
};

export default BlockList

