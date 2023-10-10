require('dotenv').config();
require("@nomiclabs/hardhat-waffle");

const { ALCHEMY_API_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/5MFUkBCUU4jq9B-5aErdqwQg6W2feBT8`,
      accounts: [PRIVATE_KEY],
      gasPrice: 20000000000, // 20 Gwei
    },
  },
};
