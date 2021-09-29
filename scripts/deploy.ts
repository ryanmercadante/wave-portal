import { ethers } from 'hardhat'

const main = async () => {
  const waveContractFactory = await ethers.getContractFactory('WavePortal')
  const waveContract = await waveContractFactory.deploy({
    value: ethers.utils.parseEther('0.001'),
  })

  await waveContract.deployed()

  console.log('WavePortal address: ', waveContract.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

runMain()
