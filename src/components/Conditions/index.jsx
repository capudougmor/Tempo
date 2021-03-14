import React from 'react'
import styled from 'styled-components/native' 
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'


export default function Conditions({ weather }) {

  return(
    <Container>
      <Condition>
        <Feather name="wind" size={23} color="#1ed6ff" />
        <Tempo>{weather.results.wind_speedy}</Tempo>
      </Condition>
      <Condition>
        <MaterialCommunityIcons name="weather-sunset-up" size={23} color="#1ed6ff" />
        <Tempo>{weather.results.sunrise}</Tempo>
      </Condition>
      <Condition>
        <MaterialCommunityIcons name="weather-sunset-down" size={23} color="#1ed6ff" />
        <Tempo>{weather.results.sunset}</Tempo>
      </Condition>
      <Condition>
        <Feather name="droplet" size={23} color="#1ed6ff" />
        <Tempo>{weather.results.humidity}%</Tempo>
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