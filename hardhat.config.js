require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
require("./tasks/blockNumber")
require("hardhat-gas-reporter")
require("solidity-coverage")

//require("@nomiclabs/hardhat-etherscan")

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks:{
    sepolia:{
      url:SEPOLIA_RPC_URL,
      accounts:[PRIVATE_KEY],
      chainId: 11155111
    },
    localhost: {
      url: "http://localhost:8545",
      chainId: 31337,
      //accounts are auto detected
    },
  },
  solidity: "0.8.8",
  etherscan:{
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
};
