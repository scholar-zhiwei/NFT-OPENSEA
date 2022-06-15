import 'dotenv/config'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-ethers'
import 'hardhat-deploy'
import '@nomiclabs/hardhat-etherscan'
import 'hardhat-gas-reporter'
import 'hardhat-spdx-license-identifier'
import '@typechain/hardhat'

import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

const namedAccounts = {
  deployer: {
    default: 0,
  },
  admin: {
    default: 0,
    kovan: 0,
  },
  dev: {
    default: 0,
  },
}

export type Signers = { [name in keyof typeof namedAccounts]: SignerWithAddress }

// import './tasks'

module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.4',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    sources: './contracts',
    // sources: "./flat",
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  namedAccounts,
  networks: {
    hecotest: {
      url: `https://http-testnet.hecochain.com`,
      accounts: [process.env.PRIVATE_KEY],
    },
    bsctest: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      accounts: [process.env.PRIVATE_KEY],
    },
    bscmainnet: {
      url: `https://bsc-dataseed.binance.org/`,
      accounts: [process.env.PRIVATE_KEY],
    },
    kovan: {
      url: `https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
      accounts: [process.env.PRIVATE_KEY],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
      accounts: [process.env.PRIVATE_KEY],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
      accounts: [process.env.PRIVATE_KEY],
    },
    localhost: {
      url: `http://localhost:8545`,
    },
    truffle: {
      url: `http://localhost:24012/rpc`,
      timeout: 60 * 60 * 1000,
    },
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
  etherscan: {
    apiKey: {
      kovan: process.env.ETH_SCAN_KEY,
      rinkeby: process.env.ETH_SCAN_KEY,
      ropsten: process.env.ETH_SCAN_KEY,
      bsc: process.env.BSC_SCAN_KEY,
      bscTestnet: process.env.BSC_SCAN_KEY,
    },
  },
}
