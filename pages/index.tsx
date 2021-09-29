import { ethers } from 'ethers'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
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
import { WavePortal__factory } from '../types'

interface TopWaver {
  address: string
  count: number
}

export default function Home() {
  const [currentAccount, setCurrentAccount] = useState('')
  const [waveCount, setWaveCount] = useState(0)
  const [topWaver, setTopWaver] = useState<TopWaver>({
    address: '',
    count: 0,
  })

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

  async function getTopWaver() {
    if (!window.ethereum) return

    const CONTRACT_ADDRESS = '0xB6639b87ff8224CF9d40a85A67A85814a32c3c9B'

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const wavePortalContract = WavePortal__factory.connect(
      CONTRACT_ADDRESS,
      signer
    )

    try {
      const [address, count] = await wavePortalContract.getTopWaver()
      setTopWaver({ address, count: count.toNumber() })
    } catch (err) {
      console.error('Something went wrong getting top waver:', err)
    }
  }

  async function wave() {
    if (!window.ethereum) return

    const CONTRACT_ADDRESS = '0xB6639b87ff8224CF9d40a85A67A85814a32c3c9B'

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const wavePortalContract = WavePortal__factory.connect(
      CONTRACT_ADDRESS,
      signer
    )

    try {
      let count = await wavePortalContract.getTotalWaves()
      console.log('Retrieved total wave count...', count.toNumber())

      // Execute the actual wave from your smart contract.
      const waveTx = await wavePortalContract.wave()
      console.log('Mining...', waveTx.hash)

      await waveTx.wait()
      console.log('Mined --', waveTx.hash)

      count = await wavePortalContract.getTotalWaves()
      console.log('Retrieved total wave count...', count.toNumber())

      await getTopWaver()

      setWaveCount(count.toNumber())
    } catch (err) {
      console.error('Something went wrong getting total waves:', err)
    }
  }

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
              <Text>
                Top Waver Address: {topWaver.address} | Top Waver Number of
                Waves: {topWaver.count}
              </Text>
            </div>
          )}
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
