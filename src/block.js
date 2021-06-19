const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(data) {
    // HEADER
    this.timestamp = Date.now();
    this.parentHash = ' ';
    this.nonce = 0;
    // BODY
    this.data = data;
    this.hash = '';
    
  }

  // Calculates the hash of the current block, must return a valid SHA256 hash
  calculateHash() {
    return SHA256(this.parentHash + this.timestamp + this.nonce + JSON.stringify(this.data)).toString();
  }

  // Mines the block hash, must return a valid SHA256 hash, replacing the inicial difficulty letters with 0
  mineBlock(difficulty) {
    while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nonce++;
      this.hash = this.calculateHash();
    }

    console.log('Block mined: ' + this.hash + ' Nonce: ' + this.nonce);
  }

}

module.exports = Block;