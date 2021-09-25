import { ethers } from 'hardhat'

const main = async () => {
  // hre = Hardhat Runtime Environment
  const [owner, randomPerson] = await ethers.getSigners()
  const waveContractFactory = await ethers.getContractFactory('WavePortal')
  const waveContract = await waveContractFactory.deploy()

  // Wait for the contract to be mined
  await waveContract.deployed()

  // Print local address
  console.log('Contract deployed to --', waveContract.address)

  // Notify miners what we want
  let waveTx = await waveContract.wave()

  // Wait for it to be mined
  await waveTx.wait()

  console.log('Done waving!')
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

runMain()
