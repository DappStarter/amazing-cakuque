require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note mirror coin install merry flock gauge'; 
let testAccounts = [
"0x667c3acffc314846e5ddd776035154ba1772417d585f6f5f9512fa174c32c097",
"0x9324954938b536ff038409e457b2a14174c2e6d8e789da85c27fa4612cfe051b",
"0xdb19b77cd6ca9794ede0347b3e949634fbdec98435114e9cd49666bcc4aa4751",
"0xfc0a6ab720a766c5b001268e5d3267ac9b472215eb1c7b5197b86669b843e0a6",
"0x6d0a0a5a59726fba30da086ee17b1aae5b00dc90b6c68631af6436447679bbf6",
"0x4e0070372d81c3727964414f5f00dae172f478c3d864fe2f909c6eb1b1749883",
"0x290b3060860d58747e3ac23d95a1addb912cc2b7b693e9fb18c1083180e3a02b",
"0xafe23bd65f332c00f6c6823c0211d210fa4528aba586dc7acb654376245b66bc",
"0xc8a6a8b62a955e876d215cc516121931a7ae97290e62716d38c1c78bc2f1e59d",
"0x1360ce45badc62c1753c62f48101381dc586ee1a17ac840643e23852dc4d2716"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

