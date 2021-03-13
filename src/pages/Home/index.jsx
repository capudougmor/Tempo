import React from 'react'
import styled from 'styled-components/native' 
import Menu from '../../components/Menu'
import Header from '../../components/Header'
import Conditions from '../../components/Conditions'
import { FlatList } from 'react-native-gesture-handler'

const mylist = [
  {
    "date": "12/03",
    "weekday": "Sex",
    "max": 26,
    "min": 17,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "13/03",
    "weekday": "Sáb",
    "max": 27,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
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
  return(
    <Container>
      <Menu />
      <Header />
      <Conditions />
      <List 
        data={mylist}
        keyExtractor={ item => item.date}
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

const List = styled(FlatList)`
  margin-top: 10px;
  margin-left: 10px;
` 
