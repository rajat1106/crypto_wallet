require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/cN2b4pXlDNWo0dIXrupCT_kThmiHnyVS',
      accounts: [ '8aea0386f167358190238be32e348082bd703c52f0f7b54a1517797ae3a9e349' ]
    }
  }
}