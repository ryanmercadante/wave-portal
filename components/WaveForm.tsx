import React from 'react'
import { Form, Input, GlowingButton } from '../styles'

interface WaveFormProps {
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
  wave(e: React.FormEvent): Promise<void>
}

export const WaveForm: React.FC<WaveFormProps> = ({
  message,
  setMessage,
  wave,
}) => {
  return (
    <Form onSubmit={wave}>
      <Input
        type='text'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <GlowingButton type='submit'>Wave at Me!</GlowingButton>
    </Form>
  )
}
