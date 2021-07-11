import CryptoES from 'crypto-es';


class Block {
  constructor(data) {
    this.timestamp = Date.now();
    this.parentHash = '';
    this.nonce = 0;
    this.data = data;
    this.hash = '';
  }

  calculateHash() {
    return CryptoES.SHA256(this.parentHash + this.timestamp + this.nonce + JSON.stringify(this.data)).toString();
  }

  mineBlock(difficulty) {
    while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nonce++;
      this.hash = this.calculateHash();
    }

    console.log('Block mined: ' + this.hash + ' Nonce: ' + this.nonce);
  }
}

export default Block;