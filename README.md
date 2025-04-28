📌 Overview
OMNY is a next-generation omnichain DeFi protocol leveraging IOTA’s feeless, scalable, and secure infrastructure to unify fragmented liquidity across blockchains. Key features include:

Hybrid AMM + Order Book DEX (low-slippage trading)

Trustless Cross-Chain Swaps (using IOTA’s native interoperability)

NFT Liquidity Positions (tradable & stakeable LP shares)

Overcollateralized Stablecoin (oUSD)

DAO Governance & Multi-Chain Staking

### 🚀 Key Features
Feature	Description
- Feeless Cross-Chain Swaps	No gas fees, powered by IOTA’s Tangle.
- Hybrid AMM + Order Book	Combines liquidity pools with limit orders.
- Omni Distribution Ledger (ODL)	Transparent reward distribution via ZK-proofs.
- NFT LP Positions	Liquidity provider shares as tradable NFTs.
- oUSD Stablecoin	150% overcollateralized by IOTA, ETH, and staked NFTs.
- DAO Governance	Community-controlled upgrades & treasury.

### ⚙️ Tech Stack
Blockchain: IOTA (Tangle)

Smart Contracts: IOTA Smart Contracts (ISC)

Interoperability: IOTA native bridges + LayerZero (EVM chains)

Frontend: React,

📂 Repository Structure
`
├── contracts/          # IOTA Smart Contracts (Rust)
├── frontend/           # React DApp
├── backend/            # Indexer & API (Node.js)
├── docs/               # Whitepaper, audits
└── README.md
`
🛠️ Installation
1. Clone the Repository
bash
`git clone https://github.com/omny-defi/omny-iota.git`
cd omny-iota
2. Set Up Smart Contracts (Rust/ISC)
`
cd contracts
cargo build --release
`
3. Run Frontend (React)
`
cd frontend
npm install
npm start
`
4. Run Backend (Node.js)
`
cd backend
npm install
npm start
`
### 🔗 Links

Whitepaper: OMNY_Whitepaper_IOTA.pdf

Audits: CertiK Report

Community: Discord | Twitter

### 🤝 Contributing
We welcome developers! Submit PRs or join our Hackathons:

Fork the repo

Create a feature branch (git checkout -b feature/new-amm)

Commit changes (git commit -m "Add hybrid AMM")

Push to branch (git push origin feature/new-amm)

Open a Pull Request

⚠️ Disclaimer
OMNY is in active development. Use at your own risk. Always audit smart contracts before interacting.

© 2025 OMNY DeFi | Built on IOTA

✨ Why IOTA?
Feeless transactions → No gas wars.

Modular smart contracts → Scalable DeFi.

Native cross-chain assets → No risky bridges.

Let’s build the future of omnichain DeFi—decentralized, efficient, and open to all. 🚀
