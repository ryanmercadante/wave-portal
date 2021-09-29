import { ethers } from 'ethers'
import Head from 'next/head'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { WaveForm } from '../components/WaveForm'
import { WaveList } from '../components/WaveList'
import {
  ConnectButton,
  Container,
  Footer,
  Header,
  Logo,
  Main,
  SubHeader,
  Text,
} from '../styles'
import { WavePortal, WavePortal__factory } from '../types'

export interface CleanedWave {
  address: string
  timestamp: number
  message: string
}

const CONTRACT_ADDRESS = '0x1086f358c456Ae83f2C41967546447d2414dbd8C'

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
  const [allWaves, setAllWaves] = useState<CleanedWave[]>([])
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  async function getAllWaves() {
    if (!window.ethereum) return

    const wavePortalContract = getWavePortalContract(ethers, window.ethereum)

    const waves = await fetchWaves(wavePortalContract)
    if (!waves) return

    setAllWaves(waves)

    // Listen for emitter events.
    wavePortalContract.on('NewWave', (from, timestamp, message) => {
      setAllWaves((prevState) => [
        ...prevState,
        {
          address: from,
          timestamp: new Date(timestamp * 1000),
          message,
        } as unknown as CleanedWave,
      ])
    })
  }

  async function checkIfWalletConnected() {
    // Check that we have access to window global.
    if (typeof window === undefined) return

    // Check for access to window.ethereum.
    if (!window.ethereum) {
      console.log('Make sure you have MetaMask installed!')
      return
    }

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
      setCurrentAccount(accounts[0])
    } catch (err) {
      console.error('Something went wrong connecting wallet:', err)
    }
  }

  async function wave(e: React.FormEvent) {
    e.preventDefault()

    setError('')

    if (!window.ethereum) return

    const wavePortalContract = getWavePortalContract(ethers, window.ethereum)

    try {
      // Execute the actual wave from your smart contract.
      const waveTx = await wavePortalContract.wave(message, {
        gasLimit: 300_000,
      })

      // Reset message.
      setMessage('')

      await waveTx.wait()
    } catch (err) {
      console.error('Something went wrong getting total waves')
      setError('Please wait 1 minute before waving again!')
    }
  }

  const renderAllWaves = useCallback(() => {
    if (allWaves.length > 0) {
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
          {currentAccount === '' ? (
            <ConnectButton onClick={connectWallet}>
              Connect to Wallet
            </ConnectButton>
          ) : (
            <WaveForm
              message={message}
              setMessage={setMessage}
              wave={wave}
              error={error}
            />
          )}
          {allWaves.length > 0 && (
            <div>
              <Text>{allWaves.length} people have waved to me! :)</Text>
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
