import React from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

import { Ionicons } from '@expo/vector-icons'

export default function Header({ background, weather, icon}) {

  return (
    <Container
      colors={background}
    >
      <Date>{weather.results.date}</Date>
      <City>{weather.results.city_name}</City>
      <Ionicons
        name={icon.name}
        color={icon.color}
        size={150}
      />
      <Tempo>{weather.results.temp}º</Tempo>
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