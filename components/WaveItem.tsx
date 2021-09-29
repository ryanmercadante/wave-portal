import React from 'react'
import { CleanedWave } from '../pages'
import { WaveListItem } from '../styles'

interface WaveItemProps {
  index: number
  wave: CleanedWave
}

export const WaveItem: React.FC<WaveItemProps> = ({ index, wave }) => {
  return (
    <WaveListItem>
      <div key={index}>
        <p>
          <strong>Address:</strong> {wave.address}
        </p>
        <p>
          <strong>Time:</strong> {wave.timestamp.toString()}
        </p>
        <p>
          <strong>Message:</strong> {wave.message}
        </p>
      </div>
    </WaveListItem>
  )
}
