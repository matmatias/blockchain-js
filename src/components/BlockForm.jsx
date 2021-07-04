import React from 'react';
import PropTypes from 'prop-types';

const BlockForm = ({addBlock}) => {
  
  const [data, setData] = React.useState("");

  return (
    <React.Fragment>
      <div>
        <h2>Data</h2>
        <input
          type="text"
          value={data}
          onChange={(evt) => {
            setData(evt.target.value);
          }}
        >
        </input>

        <button
          onClick={() => {
            addBlock(data);
          }}
        >
          ADD NEW BLOCK
        </button>
      </div>
    </React.Fragment>
  )
}

BlockForm.propTypes = {
  addBlock: PropTypes.func,
  data: PropTypes.string
};

export default BlockForm;