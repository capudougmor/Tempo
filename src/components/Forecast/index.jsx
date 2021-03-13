import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import styled from 'styled-components/native'


export default function Forecast({ data }) {

  return(
    <Container onPress={() => navigation.openDrawer()}>
      <DatePrevision>{data.date}</DatePrevision>
      <Ionicons name="rainy-outline" color="#1ec9ff" size={25} />
      <View>
        <Min>{data.min}º</Min>
        <Max>{data.max}º</Max>
      </View>
    </Container>
  )
}

const Container = styled.View`
  margin-left: 12px;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 14px;
  justify-content: center;
  align-items: center;
` 

const DatePrevision = styled.Text`
  font-size: 14px;
` 

const Min = styled(DatePrevision)`
  font-weight: bold;
` 

const Max = styled(Min)`
font-size: 18px;
` 

const View = styled.View`

` 