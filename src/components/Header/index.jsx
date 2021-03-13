import React from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

import { Ionicons } from '@expo/vector-icons'

export default function Header() {

  return (
    <Container
      colors={['#1ed6ff', '#97c1ff']}
    >
      <Date>12/03/2021</Date>
      <City>Campo Grande</City>
      <Ionicons
        name="cloud"
        color="#fff"
        size={150}
      />
      <Tempo>30º</Tempo>
    </Container>
  )
}

const Container = styled(LinearGradient)`
  width: 95%;
  height: 55%;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`

const Date = styled.Text`
  color: #fff;
  font-size: 17px;
`

const City = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`

const Tempo = styled.Text`
  color: #fff;
  font-size: 80px;
  font-weight: bold;
`