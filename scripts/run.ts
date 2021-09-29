import { ethers } from 'hardhat'

const main = async () => {
  const waveContractFactory = await ethers.getContractFactory('WavePortal')
  const waveContract = await waveContractFactory.deploy()
  await waveContract.deployed()
  console.log('Contract addy:', waveContract.address)

  let waveCount
  waveCount = await waveContract.getTotalWaves()
  console.log(waveCount.toNumber())

  /**
   * Let's send a few waves!
   */
  let waveTxn = await waveContract.wave('A message!')
  await waveTxn.wait() // Wait for the transaction to be mined

  const [_, randoPerson] = await ethers.getSigners()
  waveTxn = await waveContract.connect(randoPerson).wave('Another message!')
  await waveTxn.wait() // Wait for the transaction to be mined

  let allWaves = await waveContract.getAllWaves()
  console.log(allWaves)
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
