export const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "challenger",
                "type": "address"
            }
        ],
        "name": "BetChallenged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "creator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "token",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "targetPrice",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "isAbove",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timeframe",
                "type": "uint256"
            }
        ],
        "name": "BetOrderCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "winner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "winnerPrize",
                "type": "uint256"
            }
        ],
        "name": "BetPrizeDistributed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "creator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "BetRefunded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "winner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalPrize",
                "type": "uint256"
            }
        ],
        "name": "BetResolved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "depositor",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "EthDeposited",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "EthWithdrawn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalBetsPlaced",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalBetsWon",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalAmountWon",
                "type": "uint256"
            }
        ],
        "name": "UserBetStatUpdated",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "PLATFORM_FEE_PERCENTAGE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "betOrders",
        "outputs": [
            {
                "internalType": "address",
                "name": "creator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "targetPrice",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isAbove",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "timeframe",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startTimestamp",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "challenger",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "resolved",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "won",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "name": "challengeBetOrder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "targetPrice",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isAbove",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "timeframe",
                "type": "uint256"
            }
        ],
        "name": "createBetOrder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "depositEth",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllPendingOrders",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "orderIds",
                "type": "uint256[]"
            },
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "targetPrice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isAbove",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timeframe",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTimestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "challenger",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "resolved",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "won",
                        "type": "bool"
                    }
                ],
                "internalType": "struct PvPBettingPlatform.BetOrder[]",
                "name": "orders",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getContractEthBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPendingOrderCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getUserBetHistory",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "targetPrice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isAbove",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timeframe",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTimestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "challenger",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "resolved",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "won",
                        "type": "bool"
                    }
                ],
                "internalType": "struct PvPBettingPlatform.BetOrder[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getUserBetStats",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "totalBetsPlaced",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalBetsWon",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalAmountWon",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalAmountBet",
                        "type": "uint256"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "creator",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "targetPrice",
                                "type": "uint256"
                            },
                            {
                                "internalType": "bool",
                                "name": "isAbove",
                                "type": "bool"
                            },
                            {
                                "internalType": "uint256",
                                "name": "timeframe",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "startTimestamp",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "challenger",
                                "type": "address"
                            },
                            {
                                "internalType": "bool",
                                "name": "resolved",
                                "type": "bool"
                            },
                            {
                                "internalType": "bool",
                                "name": "won",
                                "type": "bool"
                            }
                        ],
                        "internalType": "struct PvPBettingPlatform.BetOrder[]",
                        "name": "betHistory",
                        "type": "tuple[]"
                    }
                ],
                "internalType": "struct PvPBettingPlatform.UserBetStats",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nextOrderId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "orderIndexes",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "pendingOrders",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "name": "resolveOrder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "resolveOrders",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "tokenPriceFeeds",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "userBetStats",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "totalBetsPlaced",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalBetsWon",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalAmountWon",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalAmountBet",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawEth",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
]