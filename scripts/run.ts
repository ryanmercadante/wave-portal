import { ethers } from 'hardhat'

const main = async () => {
  const [owner, randomPerson] = await ethers.getSigners()
  const waveContractFactory = await ethers.getContractFactory('WavePortal')
  const waveContract = await waveContractFactory.deploy()

  // Wait for the contract to be mined
  await waveContract.deployed()

  console.log('Contract deployed to:', waveContract.address)
  console.log('Contract deployed by:', owner.address)

  let waveCount = await waveContract.getTotalWaves()

  let waveTx = await waveContract.wave()
  await waveTx.wait()
  waveTx = await waveContract.wave()
  await waveTx.wait()

  waveTx = await waveContract.connect(randomPerson).wave()
  await waveTx.wait()

  waveTx = await waveContract.connect(randomPerson).wave()
  await waveTx.wait()

  waveTx = await waveContract.connect(randomPerson).wave()
  await waveTx.wait()

  waveCount = await waveContract.getTotalWaves()
  const { 0: topWaverAddress, 1: topWaverWaveCount } =
    await waveContract.getTopWaver()
  console.log('Top Waver Address:', topWaverAddress)
  console.log('Top Waver Wave Count:', topWaverWaveCount.toNumber())
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
