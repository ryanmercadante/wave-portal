import React from 'react'
import { CleanedWave } from '../pages'
import { WaveList as StWaveList, WaveListContainer } from '../styles'
import { WaveItem } from './WaveItem'

interface WaveListProps {
  waves: CleanedWave[]
}

export const WaveList: React.FC<WaveListProps> = ({ waves }) => {
  return (
    <WaveListContainer>
      <StWaveList>
        {waves.map((wave) => (
          <WaveItem key={wave.timestamp} wave={wave} />
        ))}
      </StWaveList>
    </WaveListContainer>
  )
}
