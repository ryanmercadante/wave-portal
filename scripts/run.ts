import { ethers } from 'hardhat'

const main = async () => {
  const waveContractFactory = await ethers.getContractFactory('WavePortal')
  const waveContract = await waveContractFactory.deploy({
    value: ethers.utils.parseEther('0.1'),
  })
  await waveContract.deployed()
  console.log('Contract addy:', waveContract.address)

  /*
   * Get Contract balance
   */
  let contractBalance = await ethers.provider.getBalance(waveContract.address)
  console.log('Contract balance:', ethers.utils.formatEther(contractBalance))

  /*
   * Send two waves
   */
  let waveTxn = await waveContract.wave('Wave 1!')
  await waveTxn.wait()

  waveTxn = await waveContract.wave('Wave 2!')
  await waveTxn.wait()

  /*
   * Get Contract balance to see what happened!
   */
  contractBalance = await ethers.provider.getBalance(waveContract.address)
  console.log('Contract balance:', ethers.utils.formatEther(contractBalance))

  let allWaves = await waveContract.getAllWaves()
  console.log(allWaves)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()
