import React from 'react'
import styled from 'styled-components/native' 
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'


export default function Conditions() {

  return(
    <Container>
      <Condition>
        <Feather name="wind" size={23} color="#1ed6ff" />
        <Tempo>7 km/h</Tempo>
      </Condition>
      <Condition>
        <MaterialCommunityIcons name="weather-sunset-up" size={23} color="#1ed6ff" />
        <Tempo>5:22 am</Tempo>
      </Condition>
      <Condition>
        <MaterialCommunityIcons name="weather-sunset-down" size={23} color="#1ed6ff" />
        <Tempo>5:22 pm</Tempo>
      </Condition>
      <Condition>
        <Feather name="droplet" size={23} color="#1ed6ff" />
        <Tempo>34%</Tempo>
      </Condition>
    </Container>      
  )
}

const Container = styled.View`
  width: 95%;
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
` 

const Condition = styled.View`
  align-items: center;
  justify-content: center;
` 

const Tempo = styled.Text`
  color: #000;
  font-size: 17px;
  font-weight: bold;
` 