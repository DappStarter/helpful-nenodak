const HDWalletProvider = require('@truffle/hdwallet-provider');

let devUrl = 'http://127.0.0.1:7545/';
let mnemonic = 'half clock bright smooth fine birth ridge punch hunt cart food giggle';   
let testAccounts = [
"0xca0807f0ff689cfcf56bd2f4e736725bd6f1d8d37e0c9582ec49825c81c14e5d",
"0xf93b027d32ea7f0a33043dff690e1fe8586662e9b8feccc21bcea46cf0db91b0",
"0x757ec2630b38114a55211779120f00d724b9f7129d7b6f7e0bd5c0c01da6d707",
"0x42128da35a51dd5ceb2c1601931301e8111d9415fbc39ae60f7474985d4bc13e",
"0x73d32ca4a3073938e6dc0a1cc2d899372a918b91e9bbe80fe0375e51fc0fd82b",
"0x3849ae7d675cca1d95bc99b8e65349fc4dec83036e22cd3090f893f57a0be571",
"0x0172782e80b4e6befbc14313923be671260c4d37a45f72d5586db5295460b363",
"0x932da41d931b075f930a4d2616ba48609625cb0f6ab999739b4ec8cf9859c0d1",
"0x1fbcf1662e2953ab72654ebe2c354231f9237720dcc238c287ec50811ace2038",
"0x2144bb6569466916faf2079a19a967e660110fa13543991dd6a269bd68290bfb"
];  

module.exports = {
  networks: {
    development: {
      url: devUrl,  // Required for DappStarter config generation
      provider: () => new HDWalletProvider(
                                      testAccounts,
                                      devUrl,           // provider url
                                      0,                // address index
                                      10,               // number of addresses
                                      true,             // share nonce
                                      `m/44'/60'/0'/0/` // wallet HD path
                                    ),
      network_id: '*'
    }
  },
  compilers: {
    solc: {
      version: '^0.5.11'
    }
  }
};
