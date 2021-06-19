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

    it('Blockchain must return the last block', function(){
        let blockchain1 = new Blockchain(difficulty = 3);
        blockchain1.createGenesisBlock();
        let newBlock = new Block('Block 1');
        blockchain1.addBlock(newBlock);
        expect(blockchain1.getLatestBlock().data).to.be.equal("Block 1");
        newBlock = new Block('Here I am');
        blockchain1.addBlock(newBlock);
        expect(blockchain1.getLatestBlock().data).to.be.equal("Here I am");
    });

    it('Empty blockchain must return an error when trying to get latest block', function () {
        let blockchainTest = new Blockchain(difficulty = 3);
        expect(function(){
            blockchainTest.getLatestBlock();
        }).to.throw("Blockchain does not have any blocks");
    });
});