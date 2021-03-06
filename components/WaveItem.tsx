import React from 'react'
import { CleanedWave } from '../pages'
import { WaveListItem } from '../styles'

interface WaveItemProps {
  wave: CleanedWave
}

export const WaveItem: React.FC<WaveItemProps> = ({ wave }) => {
  return (
    <WaveListItem>
      <div>
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
