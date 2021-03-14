import React from 'react'
import styled from 'styled-components/native'
import * as Location from 'expo-location'

import { useEffect, useState } from 'react'

import api, { key } from '../../services/api'

import Menu from '../../components/Menu'
import Header from '../../components/Header'
import Conditions from '../../components/Conditions'
import Forecast from '../../components/Forecast'
import { Text } from 'react-native'

const mylist = [
  {
    "date": "12/03",
    "weekday": "Sex",
    "max": 26,
    "min": 17,
    "description": "Tempestades",
    "condition": "clear_day"
  },
  {
    "date": "13/03",
    "weekday": "Sáb",
    "max": 27,
    "min": 18,
    "description": "Tempestades",
    "condition": "rain"
  },
  {
    "date": "14/03",
    "weekday": "Dom",
    "max": 27,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "15/03",
    "weekday": "Seg",
    "max": 26,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "16/03",
    "weekday": "Ter",
    "max": 27,
    "min": 17,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "17/03",
    "weekday": "Qua",
    "max": 28,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "18/03",
    "weekday": "Qui",
    "max": 25,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "19/03",
    "weekday": "Sex",
    "max": 23,
    "min": 19,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "20/03",
    "weekday": "Sáb",
    "max": 23,
    "min": 19,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "21/03",
    "weekday": "Dom",
    "max": 24,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  }
]

export default function Home() {
  const [errorMsg, setErrorMsg] = useState()
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState([])
  const [icon, setIcon] = useState({ name: 'cloud', color: '#fff' })
  const [background, setBackground] = useState(['#1ed6ff', '#97c1ff'])


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync()

      if (status !== 'granted') {
        setErrorMsg("Permissao negada para acessar a localização!")
        return
      }

      let location = await Location.getCurrentPositionAsync({})

      const response = await api.get(
        `/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
      )
      setWeather(response.data)

      if (response.data.results.currently == 'noite') {
        setBackground(['#0c3741', '#0f2f61'])
      }

      switch (response.data.results.condition_slug) {
        case 'clear_day':
          setIcon = ({ name: 'sunny-outline', color: '#ffb300' })
          break
        case 'cloudly_day':
          setIcon = ({ name: 'partly-sunny-outline', color: '#ffb300' })
          break
        case 'rain':
          setIcon = ({ name: 'rainy-outline', color: '#fff' })
          break
        case 'storm':
          setIcon = ({ name: 'thunderstorm-outline', color: '#fff' })
          break
      }

      setLoading(false)
    })()
  }, [])

  if (loading) {
    return <Text>loading</Text>
  } 
    return (
      <Container>
        <Menu />
        <Header background={background} weather={weather} icon={icon} />
        <Conditions weather={weather} />
        <List
          data={mylist}
          keyExtractor={item => item.date}
          renderItem={({ item }) => <Forecast data={item} />}
          horizontal={true}
        />
      </Container>
    )
  }
  
const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e8f0ff;
  padding-top: 10px;
`

const List = styled.FlatList`
  margin-top: 10px;
  margin-left: 10px;
`
