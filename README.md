# Hardhat project/Skill based task market System
This project features a decentralized application (dApp) built with React and ethers.js, enabling interaction with an Ethereum smart contract. It provides a platform for a **Decentralized Task Marketplace**, where users can connect their MetaMask wallet to create, claim, complete, and receive rewards for tasks. Task details can be viewed by entering a task ID. With integrated ABI and contract address, the dApp ensures smooth interaction with the Ethereum blockchain. The user experience is optimized by real-time UI updates based on the connected wallet and immediate feedback on transactions.

## Description
**Skill-Based Task Market System** is a decentralized application (dApp) built with React and ethers.js, designed to offer a comprehensive platform for managing and participating in task-based markets. Users can interact with an Ethereum smart contract to create tasks, claim tasks, mark them as completed, and receive rewards. The application supports MetaMask wallet integration, allowing users to connect their wallets, manage tasks, and view details of any task using its ID. Additionally, users can track the status of tasks and receive real-time updates on their transactions.
### Key Features
1. **MetaMask Integration**: Users can connect their MetaMask wallet to the dApp, enabling seamless interaction with the Ethereum blockchain.
2. **Create Task**: Owner  can create a new task at any time.
3. **claim task**: worker  can claim the task using task id.
4. **complete Task**: Worker can mark the status as complete for the claimed task by entering task id .
5. **Claim Reward**: After completing the task user can claim the reward give by the owner in return of completion of task.
6. **Get  TAsk Details**: Anyone  can get the dtails of task  only with the help of Task id.

### Smart Contract Integration
The dApp interacts with a deployed smart contract on the Ethereum blockchain. The contract's ABI and address are integrated into the application for seamless interaction.

**Contract Address:** 0x.......

**ABI:** The ABI is imported from the contract's JSON artifact.

## Getting Started

### Executing Program
To execute this program into your local machine first you have to ensure that your local machine has the latest node.js and npm configuration and added to path in your machine's environment variable. After that create a new folder and open that folder in VS code.
Then follow these steps:
1. Open the terminal in VS code and clone the repository using the command 
`git clone https://github.com/Abhi2162/Assesment-3.2_Smart-Contract-Management---ETH-AVAX.git`
2.  Navigate to the project directory using the command 
`SCM-Starter-main`
3. Install the required dependencies using the command
`npm i`
4. When it gets completed open two additional terminals in your VS code
5. In the second terminal type: 
`npx hardhat node`
6. In the third terminal, type:
`npx hardhat run scripts/deploy.js --network localhost`
7. Back in the first terminal and type the below commant to launch the front-end:
`npm run dev`

After this, the project will be running on your localhost. Typically at http://localhost:3000 run the dApp as you wish.

## Authors
Abhinesh kumar

## License
This project is licensed under the MIT License.
