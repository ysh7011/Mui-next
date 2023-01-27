"use client"

import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from '@mui/material'

const Index = () => {
  return (
    <div>
      <p>playgorund에서 styled component 사용</p>
      <Button variant="contained">Contained</Button>
      <PageBox>
        1번
      </PageBox>
      <PageBox primary>
        2번
      </PageBox>
    </div>
  )
}

export default Index


const PageBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: #0082FF;

  ${(props: { primary: string }) => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`