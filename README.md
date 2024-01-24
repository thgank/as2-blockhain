# Assignment II Blockchain
## SE-2224, Serikov Nursultan
At the second assignment i had to deploy my contract to any Public testnet!

At first it is important to deploy contract from Remix IDE to somewhere. I choose Sepolia Testnet.
I took my code from the 1st Assignment and refactored it a bit.

```Solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AITU_Nursultan is ERC20 {
    uint256 private _lastTransactionTime;

    constructor() ERC20("AITU_Nursultan", "AITU") {
        uint256 initialSupply = 2000 * (10 ** uint256(decimals()));
        _mint(msg.sender, initialSupply);
        _lastTransactionTime = block.timestamp;
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        bool success = super.transfer(recipient, amount);
        if (success) {
            _lastTransactionTime = block.timestamp;
        }
        return success;
    }

    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        bool success = super.transferFrom(sender, recipient, amount);
        if (success) {
            _lastTransactionTime = block.timestamp;
        }
        return success;
    }

    function latestTransactionTime() public view returns (uint256) {
        return _lastTransactionTime;
    }

    function getSender() public view returns (address) {
        return _msgSender();
    }

    function getReceiver() public view returns (address recipient) {
        return address(this);
    }
}
```

And then, using Metamask, i deployed it in Sepolia:
![Снимок экрана 2024-01-24 223514](https://github.com/thgank/as2-blockhain/assets/122772347/58797641-64a4-4044-9808-a84c7e5658d2)

Next thing is to how to use this contract...
And there i have implemented a **Web3js** project.
There is a sample method:
```Javascript
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
```

And there is the output of a whole program:
```
Latest Transaction Time: 2024-1-23 22:51:48
Address of Receiver: 0x027ff07E2b804a35E5774059a3187c8893A6976B
```

You can copy this repo and check how it works. Thanks a lot for your attention!
