import React from 'react'
import { CleanedWave } from '../pages'
import { WaveList as StWaveList } from '../styles'
import { WaveItem } from './WaveItem'

interface WaveListProps {
  waves: CleanedWave[]
}

export const WaveList: React.FC<WaveListProps> = ({ waves }) => {
  return (
    <StWaveList>
      {waves.map((wave, index) => (
        <WaveItem index={index} wave={wave} />
      ))}
    </StWaveList>
  )
}
