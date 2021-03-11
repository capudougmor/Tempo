import React from 'react'
import styled from 'styled-components/native' 
import Menu from '../../components/Menu'


export default function Home() {
  return(
    <Container>
      <Menu />
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

const Title = styled.Text`

` 