// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    struct WaverStruct {
        uint256 waveCount;
        bool isWaver;
    }

    mapping(address => WaverStruct) waverStructs;
    address[] public waverList;
    uint256 totalWaves;

    constructor() {
        console.log("Yooo my smart contract is running!!!!");
    }

    function isWaver(address waverAddress) public view returns (bool) {
        return waverStructs[waverAddress].isWaver;
    }

    function newWaver(address waverAddress) public {
        if (!isWaver(waverAddress)) {
            waverStructs[waverAddress].waveCount = 0;
            waverStructs[waverAddress].isWaver = true;
            waverList.push(waverAddress);
        }
    }

    function updateWaverWaveCount(address waverAddress) public {
        waverStructs[waverAddress].waveCount += 1;
    }

    function wave() public {
        totalWaves += 1;
        newWaver(msg.sender);
        updateWaverWaveCount(msg.sender);
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function getTopWaver()
        public
        view
        returns (address waverAddress, uint256 waveCount)
    {
        uint256 i;
        waverAddress;
        waveCount;
        for (i = 0; i < waverList.length; i += 1) {
            if (waverStructs[waverList[i]].waveCount > waveCount) {
                waveCount = waverStructs[waverList[i]].waveCount;
                waverAddress = waverList[i];
            }
        }
        return (waverAddress, waveCount);
    }
}
