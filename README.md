# Change-Nest

A crowdfunding app built on the Ethereum Blockchain to create and donate to crowdfunding campaigns. Developed using React.js, Tailwind CSS, and Solidity for smart contracts.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Smart Contract](#smart-contract)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
Pay-To-Care is a decentralized application (dApp) designed to facilitate crowdfunding through the Ethereum Blockchain. It allows users to create campaigns and make donations securely using smart contracts.

## Features
- Create crowdfunding campaigns
- Donate to existing campaigns
- View all campaigns and their details
- Secure transactions using Ethereum smart contracts

## Installation
### Prerequisites
- Node.js
- npm
- Truffle
- Ganache
- MetaMask

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/eternalist10/Pay-To-Care.git
   cd Pay-To-Care
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start Ganache:
   ```sh
   ganache-cli
   ```

4. Compile and migrate smart contracts:
   ```sh
   truffle compile
   truffle migrate
   ```

5. Run the React application:
   ```sh
   npm start
   ```

## Usage
1. Open MetaMask and connect to the local Ethereum network.
2. Open your browser and navigate to `http://localhost:3000`.
3. Create or donate to campaigns through the UI.

## Smart Contract
The smart contract is written in Solidity and handles the creation and management of campaigns. It ensures secure and transparent transactions.

### Deploying Contracts
Make sure to update the migration scripts if necessary and then run:
```sh
truffle migrate --reset
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or suggestions, feel free to contact:
- **Repository Owner:** [eternalist10](https://github.com/eternalist10)

---
