import React from 'react'
import styled from 'styled-components/native' 
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


export default function Menu() {
  const navigation = useNavigation()

  return(
    <Container onPress={() => navigation.openDrawer()}>
      <Feather
        name="menu"
        size={36}
        color="#373737"
      />
    </Container>
  )
}

const Container = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  position: absolute;
  left: 10px;
  top: 40px;
  z-index: 9;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  
` 

const Title = styled.Text`

` 