const Block = require('./block');

function createBlock(index, timestamp, parentHash = '', nonce, data) {
  // Return a new Block Object initialed with the attributes below
  return new Block(index, timestamp, parentHash, nonce, data);
}

function insertBlock(head, blockAttrs) {
  const oldHead = head;

  // New block parent Hash equals the hash of the old head.
  let newBlock = createBlock(blockAttrs.index, blockAttrs.timestamp, oldHead.hash, blockAttrs.nonce, blockAttrs.data);

  // Head gets updated
  head.index = newBlock.index;
  head.timestamp = newBlock.timestamp;
  head.parentHash = newBlock.parentHash;
  head.blockAttrs = newBlock.nonce;
  head.data = newBlock.data;

  return head;  
}

function printBlockchain(head) {
  while(head.parentHash != null) {
    console.log(head);
    let parentBlock = head.verifyBlock(head.parentHash);
    head = parentBlock;
  }
}

let head = createBlock(0, 0, '', 0, 0);
blockAttrs = {
  index: 1,
  timestamp: 1,
  hash: head.hash,
  nonce: 1,
  data: 1
};

insertBlock(head, blockAttrs);
printBlockchain(head);