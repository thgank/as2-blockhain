const Web3 = require("web3");

const web3 = new Web3("https://rpc2.sepolia.org");

const contractAddress = "0x027ff07E2b804a35E5774059a3187c8893A6976B";
const contractAbi = require("./contractAbi");

const contract = new web3.eth.Contract(contractAbi, contractAddress);

contract.methods.latestTransactionTime().call()
    .then(result => {
        const timestamp = parseInt(result);
        const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds

        // Format the date as a string
        const formattedDate = date.toLocaleString(); // Adjust this based on your preferred date/time format

        console.log("Latest Transaction Time:", formattedDate);
    })
    .catch(error => {
        console.error("Error calling latestTransactionTime:", error);
    });

contract.methods.getReceiver().call()
    .then(result=>{
      console.log("Address of Receiver:", result);
    })

// contract.methods.getSender().call()
//     .then(result=>{
//         console.log(result);
//     })
