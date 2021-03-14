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
      console.log(location);

      const response = await api.get(
        `/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
      )
      setWeather(response.data)

      if (response.data.results.currently == 'noite') {
        setBackground(['#0c3741', '#0f2f61'])
      }

      switch (response.data.results.condition_slug) {
        case 'clear_day':
          setIcon({ name: 'sunny-outline', color: '#ffb300' })
          break
        case 'cloudly_day':
          setIcon({ name: 'partly-sunny', color: '#ffb300' })
          break
        case 'rain':
          setIcon({ name: 'rainy-outline', color: '#fff' })
          break
        case 'storm':
          setIcon({ name: 'thunderstorm', color: '#fff' })
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
          data={weather.results.forecast}
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
