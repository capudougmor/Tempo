import React from 'react'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { useState } from 'react/cjs/react.development'
import { useNavigation } from '@react-navigation/native'

import api, { key } from '../../services/api'
import { Keyboard } from 'react-native'

export default function Seach() {
  const [input, setInput] = useState('')
  const [city, setCity] = useState(null)
  const [error, setError] = useState(null)

  const {navigate} = useNavigation()

  async function handleSearch() {
    const response = await api.get(`/weather?key=${key}&city_name=${input}`)
    // console.log(response.data);
    if(response.data.by === 'default') {
      setError('Hum, cidade não encontrada!')
      setInput('')
      setCity(null)
      Keyboard.dismiss()
      return
    }
    
    setCity(response.data)
    setInput('')
    setError(null)
    Keyboard.dismiss()
  }

  return (
    <Container>
      <BackButton
        onPress={() => navigate('Home')}
      >
        <Feather
          name="chevron-left"
          size={32}
          color="#000"
        />
        <Title>Voltar</Title>
      </BackButton>
      <SearchBox>
        <Input
          value={input}
          onChangeText={(valor) => setInput(valor)}
          placeholder="Ex: Campinas, SP"
        />
        <Submit onPress={handleSearch}>
          <Feather
            name="search"
            size={22}
            color="#fff"
          />
        </Submit>
      </SearchBox>
      {error && <TextError>{error}</TextError>}
    </Container>
  )
}
const Container = styled.SafeAreaView`
  padding-top: 10%;
  flex: 1;
  align-items: center;
  background-color: #e8f0ff;
`

const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 15px;
  align-self: flex-start;
  align-items: center;
  margin-bottom: 10px;
`

const Title = styled.Text`
  font-size: 22px;
`

const SearchBox = styled.View`
  width: 90%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  background-color: #ddd;
  border-radius: 8px;
`

const Input = styled.TextInput`
  flex: 1;
  height: 50px;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 10px;
`

const Submit = styled.TouchableOpacity`
  width: 15%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #1ec9ff;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`

const TextError = styled.Text`
  font-size: 18px;
  padding: 12px;
`