const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(index, nonce, data) {
    // HEADER
    this.index = index;
    this.timestamp = Date.now();
    this.parentHash = null;
    this.nonce = nonce;
    // BODY
    this.data = data;
    this.hash = this.calculateHash();
  }

  // Calculates the hash of the current block
  calculateHash() {
    return SHA256(this.index + this.parentHash + this.timestamp + this.nonce + JSON.stringify(this.data)).toString();
  }
  /* UNUSED UNTIL THERE IS A BETTER SOLUTION TO PRINT ALL BLOCKS OF THE BLOCKCHAIN
  // Return itself if hash is matched
  verifyBlock(hash) {
    if(this.hash == hash) {
      return this;
    }
    return null;
  }
  */
}

module.exports = Block;