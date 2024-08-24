import { useState, useEffect } from "react";
import { ethers } from "ethers";
import task_abi from "../artifacts/contracts/SkillBasedTaskMarket.sol/SkillBasedTaskMarket.json";

export default function TaskMarketPage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [taskContract, setTaskContract] = useState(undefined);
  const [taskCount, setTaskCount] = useState(undefined);
  const [taskId1, setTaskId1] = useState("");
  const [taskId2, setTaskId2] = useState("");
  const [taskId3, setTaskId3] = useState("");
  const [taskId4, setTaskId4] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [reward, setReward] = useState("");
  const [taskDetails, setTaskDetails] = useState("");

  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const taskABI = task_abi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const accounts = await ethWallet.request({ method: "eth_accounts" });
      setAccounts(accounts);
      setSelectedAccount(accounts[0]);
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    setAccounts(accounts);
    setSelectedAccount(accounts[0]);

    // once wallet is set we can get a reference to our deployed contract
    getTaskContract();
  };

  const getTaskContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const taskContract = new ethers.Contract(contractAddress, taskABI, signer);

    setTaskContract(taskContract);
  };

  const getTaskCount = async () => {
    if (taskContract) {
      setTaskCount((await taskContract.taskCount()).toNumber());
    }
  };

  const createTask = async () => {
    if (taskContract) {
      let tx = await taskContract.createTask(taskDescription, { value: ethers.utils.parseEther(reward) });
      await tx.wait();
      getTaskCount();
    }
  };

  const claimTask = async () => {
    if (taskContract) {
      let tx = await taskContract.claimTask(taskId1);
      await tx.wait();
      getTaskCount();
    }
  };

  const completeTask = async () => {
    if (taskContract) {
      let tx = await taskContract.completeTask(taskId2);
      await tx.wait();
      getTaskCount();
    }
  };

  const claimReward = async () => {
    if (taskContract) {
      let tx = await taskContract.claimReward(taskId3);
      await tx.wait();
      getTaskCount();
    }
  };

  const getTaskDetails = async () => {
    if (taskContract) {
      const details = await taskContract.getTaskDetails(taskId4);
      setTaskDetails(`Description: ${details[0]} | Reward: ${ethers.utils.formatEther(details[1])} ETH | Employer: ${details[2]} | Worker: ${details[3]} | Completed: ${details[4]}`);
    }
  };

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
  };

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this DApp.</p>;
    }

    // Check to see if user is connected. If not, connect to their account
    if (accounts.length === 0) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet</button>;
    }

    if (taskCount == undefined) {
      getTaskCount();
    }

    return (
      <div>
        <p>Your Account: 
          <select value={selectedAccount} onChange={handleAccountChange}>
            {accounts.map((acc, index) => (
              <option key={index} value={acc}>{acc}</option>
            ))}
          </select>
        </p>
        <p>Number of Tasks: {taskCount}</p>
        <div>
          <h4>Create Task</h4>
          <input type="text" value={taskDescription} placeholder="Task Description" onChange={(e) => setTaskDescription(e.target.value)} /><br></br>
          <input type="text" value={reward} placeholder="Reward (ETH)" onChange={(e) => setReward(e.target.value)} /><br></br>
          <button onClick={createTask}>Create Task</button>
        </div>
        <div>
          <h4>Claim Task</h4>
          <input type="text" value={taskId1} placeholder="Task ID" onChange={(e) => setTaskId1(e.target.value)} /><br></br>
          <button onClick={claimTask}>Claim Task</button>
        </div>
        <div>
          <h4>Complete Task</h4>
          <input type="text" value={taskId2} placeholder="Task ID" onChange={(e) => setTaskId2(e.target.value)} /><br></br>
          <button onClick={completeTask}>Complete Task</button>
        </div>
        <div>
          <h4>Claim Reward</h4>
          <input type="text" value={taskId3} placeholder="Task ID" onChange={(e) => setTaskId3(e.target.value)} /><br></br>
          <button onClick={claimReward}>Claim Reward</button>
        </div>
        <div>
          <h4>Get Task Details</h4>
          <input type="text" value={taskId4} placeholder="Task ID" onChange={(e) => setTaskId4(e.target.value)} /><br></br>
          <button onClick={getTaskDetails}>Get Details</button>
          <p>Task Details: {taskDetails}</p>
        </div>
      </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header>
        <h1>Welcome to Skill-Based Task Market!</h1>
      </header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center;
          border: 3px solid #333;
          padding: 10px;
          background-color: #f0f0f0;
        }
        h1 {
          display: inline;
          padding: 5px;
          color: #333;
        }
        input {
          margin-bottom: 10px;
        }
        button {
          margin: 5px;
        }
      `}</style>
    </main>
  );
}
