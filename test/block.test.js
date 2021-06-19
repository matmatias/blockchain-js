const expect = require('chai').expect;
const Block = require('../src/block');

describe('Block tests', () => {
  context('Block does not exist and is created with data being passed as parameter.', (data) => {
    // given 
    block = new Block(data);
    // then
    it('Data must be not null', () => {
      expect(data).not.to.be.null;
    });

    it('Must have property timestamp.', () => {
      expect(block).to.have.property('timestamp');
    });

    it('Must have property parentHash.', () => {
      expect(block).to.have.property('parentHash');
    });

    it('Must have property nonce.', () => {
      expect(block).to.have.property('nonce');
    });

    it('Must have property data.', () => {
      expect(block).to.have.property('data');
    });

    it('Must have property hash.', () => {
      expect(block).to.have.property('hash');
    });
  });

  context('Block exists and the method "calculateHash" is called: ', (data) => {
    // given
    let block = new Block(data);

    // then
    it('Must return a string with a length of 64 characters', () => {
      expect(block.calculateHash().length).to.be.equal(64);
    });
  })

  context('Block exists and the method "mineBlock" is called: ', () => {
    // given
    let block = new Block('Test data');
    block.mineBlock(3);

    // then
    it('Must return a valid hash, that is a 64 length string with the first X characters being "0", where X = mineBlock() parameter', () => {
      expect(block.hash).to.match(/[0]{3}.{61}/);
    });
  })
})