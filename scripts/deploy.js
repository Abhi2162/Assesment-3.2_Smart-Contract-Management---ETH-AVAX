// Import the Hardhat Runtime Environment explicitly
const hre = require("hardhat");

async function main() {
  // Get the contract factory for SkillBasedTaskMarket
  const SkillBasedTaskMarket = await hre.ethers.getContractFactory("SkillBasedTaskMarket");
  
  // Deploy the contract
  const skillBasedTaskMarket = await SkillBasedTaskMarket.deploy();
  
  // Wait for the deployment to be mined
  await skillBasedTaskMarket.deployed();

  // Log the address of the deployed contract
  console.log(`SkillBasedTaskMarket deployed to ${skillBasedTaskMarket.address}`);
}

// Execute the main function and handle errors
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
