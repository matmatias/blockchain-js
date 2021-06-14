const assert = require('chai').assert;
const expect = require('chai').expect;
const Block = require('../src/block');
const Blockchain = require('../src/blockchain');

describe('Testes', function(){
    it('Must start an empty blockchain', function(){
        let blockchain1 = new Blockchain(difficulty = 3);
        expect(blockchain1.chain).to.be.empty;
    });

    it('Must return the genesis block with empty parentHash', function(){
        let blockchain1 = new Blockchain(difficulty = 3);
        blockchain1.createGenesisBlock();
        expect(blockchain1.chain[0].parentHash).to.be.equal(" ");
    });


});