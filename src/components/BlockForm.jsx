import React from 'react';
import PropTypes from 'prop-types';
import { Container, Div, Button } from '../styles/BlockFormStyles';

const BlockForm = ({addBlock}) => {
  
  const [data, setData] = React.useState("");

  return (
    <React.Fragment>
      <Container>
        <Div>
          <h2>Data</h2>
          <input
            type="text"
            value={data}
            onChange={(evt) => {
              setData(evt.target.value);
            }}
          >
          </input>
        </Div>

        <Button
          onClick={() => {
            addBlock(data);
          }}
        >
          ADD NEW BLOCK
        </Button>
      </Container>
    </React.Fragment>
  )
}

BlockForm.propTypes = {
  addBlock: PropTypes.func,
  data: PropTypes.string
};

export default BlockForm;