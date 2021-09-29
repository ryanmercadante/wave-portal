import React from 'react'
import { Form, Input, GlowingButton, ErrorText } from '../styles'

interface WaveFormProps {
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
  wave(e: React.FormEvent): Promise<void>
  error: string
}

export const WaveForm: React.FC<WaveFormProps> = ({
  message,
  setMessage,
  wave,
  error,
}) => {
  return (
    <>
      {error && <ErrorText>{error}</ErrorText>}
      <Form onSubmit={wave}>
        <Input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <GlowingButton type='submit'>Wave at Me!</GlowingButton>
      </Form>
    </>
  )
}
