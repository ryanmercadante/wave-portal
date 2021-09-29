import { ethers } from 'ethers'
import Head from 'next/head'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { WaveList } from '../components/WaveList'
import {
  ButtonContainer,
  ConnectButton,
  Container,
  Footer,
  GlowingButton,
  Header,
  Logo,
  Main,
  SubHeader,
} from '../styles'
import { Text } from '../styles/components/Text'
import { WavePortal, WavePortal__factory } from '../types'

export interface CleanedWave {
  address: string
  timestamp: number
  message: string
}

const CONTRACT_ADDRESS = '0x47191eAa61e9F6B30d2D3f24746D878dd27B724B'

function getWavePortalContract(_ethers: any, _ethereum: any): WavePortal {
  const provider = new _ethers.providers.Web3Provider(_ethereum)
  const signer = provider.getSigner()
  return WavePortal__factory.connect(CONTRACT_ADDRESS, signer)
}

async function fetchWaves(
  _wavePortalContract: WavePortal
): Promise<CleanedWave[] | undefined> {
  try {
    const waves = await _wavePortalContract.getAllWaves()
    const cleanedWaves: CleanedWave[] = waves?.map(
      (wave) =>
        ({
          address: wave.waver,
          timestamp: new Date(wave.timestamp.toNumber() * 1000),
          message: wave.message,
        } as unknown as CleanedWave)
    )
    return cleanedWaves
  } catch (err) {
    console.error('Something went wrong getting all waves:', err)
    return undefined
  }
}

export default function Home() {
  const [currentAccount, setCurrentAccount] = useState('')
  const [waveCount, setWaveCount] = useState(0)
  const [allWaves, setAllWaves] = useState<CleanedWave[]>([])

  async function getAllWaves() {
    if (!window.ethereum) return

    const wavePortalContract = getWavePortalContract(ethers, window.ethereum)

    const waves = await fetchWaves(wavePortalContract)
    if (!waves) return

    console.log('here', waves)
    setAllWaves(waves)
  }

  async function checkIfWalletConnected() {
    // Check that we have access to window global.
    if (typeof window === undefined) return

    // Check for access to window.ethereum.
    if (!window.ethereum) {
      console.log('Make sure you have MetaMask installed!')
      return
    }

    console.log('Ethereum object detected:', window.ethereum)

    // Check if we're authorized to access the user's wallet.
    try {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' })

      // Set the first authorized account (if any) in state variable
      if (accounts.length !== 0) {
        const firstAccount = accounts[0]
        setCurrentAccount(firstAccount)
      }

      await getAllWaves()
    } catch (err) {
      console.error(
        'Something went wrong requesting accounts from ethereum:',
        err
      )
    }
  }

  async function connectWallet() {
    if (!window.ethereum) {
      alert('Install MetaMask!')
      return
    }

    try {
      // Request access to account.
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      console.log('Current Account:', accounts[0])
      setCurrentAccount(accounts[0])
    } catch (err) {
      console.error('Something went wrong connecting wallet:', err)
    }
  }

  async function wave() {
    if (!window.ethereum) return

    const wavePortalContract = getWavePortalContract(ethers, window.ethereum)

    try {
      let count = await wavePortalContract.getTotalWaves()
      console.log('Retrieved total wave count...', count.toNumber())

      // Execute the actual wave from your smart contract.
      const waveTx = await wavePortalContract.wave('Hi there!')
      console.log('Mining...', waveTx.hash)

      await waveTx.wait()
      console.log('Mined --', waveTx.hash)

      count = await wavePortalContract.getTotalWaves()
      console.log('Retrieved total wave count...', count.toNumber())

      setWaveCount(count.toNumber())
    } catch (err) {
      console.error('Something went wrong getting total waves:', err)
    }
  }

  const renderAllWaves = useCallback(() => {
    console.log('use callbacks')
    if (allWaves.length > 0) {
      console.log('all', allWaves)
      return <WaveList waves={allWaves} />
    }
  }, [allWaves])

  useEffect(() => {
    checkIfWalletConnected()
  }, [])

  return (
    <Container>
      <Head>
        <title>Wave Portal</title>
        <meta
          name='description'
          content='Website to register a wave on the ethereum blockchain!'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main>
        <div>
          <Header>👋 Hey there!</Header>
          <SubHeader>
            I'm Ryan and I'm a full stack developer who is learning all things
            web3!
          </SubHeader>
          <ButtonContainer>
            {currentAccount === '' ? (
              <ConnectButton onClick={connectWallet}>
                Connect to Wallet
              </ConnectButton>
            ) : (
              <GlowingButton onClick={wave}>Wave at Me!</GlowingButton>
            )}
          </ButtonContainer>
          {waveCount > 0 && (
            <div>
              <Text>{waveCount} people have waved to me! :)</Text>
            </div>
          )}
          {renderAllWaves()}
        </div>
      </Main>

      <Footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <Logo>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </Logo>
        </a>
      </Footer>
    </Container>
  )
}
