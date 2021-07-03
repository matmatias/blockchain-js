import React from 'react';

const Navbar = (props) => {

  return (
    <React.Fragment>
      <div>
        <div>
          <a href="#">Blockchain Viewer</a>
        </div>

        <div>
          <button>
            Initialize Blockchain
          </button>
          <button>
            Add Genesis Block
          </button>
          <button>
            Add Block
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar;