"use client"

import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import memberTheme from '../core/memberTheme'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'

const Index = () => {
  const router = useRouter()
  const goToMain = () => {
    router.push('/')
  }
  const goToPlay = () => {
    router.push('/play')
  }
  return (
    <ThemeProvider theme={memberTheme}>
      <Container>
        <p>member에서만 다른 팔렛트를 쓰는경우 code</p>
        <div className="btn-group">
          <Button variant="contained" onClick={goToMain}>뒤로가기</Button>
          <Button variant="contained" color="info" onClick={goToPlay}>play ground</Button>
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default Index

const Container = styled.div`
  .btn-group {
    display: flex;
    width: 300px;
    justify-content: space-between;
  }
`