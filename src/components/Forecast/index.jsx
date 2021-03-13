import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import styled from 'styled-components/native'

import { condition } from '../../utils/conditions'


export default function Forecast({ data }) {

  let icon = condition(data.condition)

  return(
    <Container onPress={() => navigation.openDrawer()}>
      <DatePrevision>{data.date}</DatePrevision>
      <Ionicons name={icon.name} color={icon.color} size={25} />
      <View>
        <Min>{data.min}º</Min>
        <Max>{data.max}º</Max>
      </View>
    </Container>
  )
}

const Container = styled.View`
  margin: 10px 6px;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 14px;
  justify-content: space-around;
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