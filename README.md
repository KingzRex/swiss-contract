# Swisstronik Developer Challenge 2

This is a sample smart contract code writen in solidity that is deployed on Swisstronik testnet  and Polygon Mumbai Testnet, the contract is written to set data, retrive and change the data.

There's a deploy.js script to deploy the contract with hardhat and an accessVar.js file to retrive the data on both networks.

Try it out:

Clone the Repo
```shell
https://github.com/KingzRex/swiss-contract.git
```
Install dependencies
```shell
npm i
```

Compile contracts
```shell
npx hardhat compile
```
Deploy contracts
```shell
npx hardhat run scripts/deploy.js
```

Deploy contracts
```shell
npx hardhat run scripts/deploy.js --network mumbai
npx hardhat run scripts/deploy.js --network swisstronik
```

Retrive Data
```shell
npx hardhat run scripts/accessVar.js
```
