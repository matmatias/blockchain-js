// const SHA256 = require('crypto-js/sha256');
// import {SHA256} from 'crypto-js';
// const sha256 = require('crypto-js/sha256');
import CryptoES from 'crypto-es';


class Block {
  constructor(data) {
    // HEADER
    this.timestamp = Date.now();
    this.parentHash = '';
    this.nonce = 0;
    // BODY
    this.data = data;
    this.hash = '';
  }

  // Calculates the hash of the current block, must return a valid SHA256 hash
  calculateHash() {
    return CryptoES.SHA256(this.parentHash + this.timestamp + this.nonce + JSON.stringify(this.data)).toString();
  }

  // Mines the block hash, must return a valid SHA256 hash, replacing the inicial difficulty letters with 0
  mineBlock(difficulty) {
    while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nonce++;
      this.hash = this.calculateHash();
    }

    console.log('Block mined: ' + this.hash + ' Nonce: ' + this.nonce);
  }

  // Returns all block info
  getBlockInfo() {
    return `HEADER\n
    timestamp => ${this.timestamp}\n
    parentHash => ${this.parentHash}\n
    nonce => ${this.nonce}\n
    data => ${this.data}\n
    hash => ${this.hash}`;
  }

  getData(){
    return this.data;
  }

}

// module.exports = Block;
export default Block;