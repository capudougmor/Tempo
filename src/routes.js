import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from './pages/Home'
import Seach from './pages/Seach'

const {Navigator, Screen} = createDrawerNavigator()

function Routes() {
  return(
    <Navigator>
      <Screen         
        name="Home"
        component={Home}
        options={{
          title: 'Minha cidade'
        }}
        />
      <Screen 
        name="Seach"
        component={Seach}
        options={{
          title: 'Procurar'
        }}
        />
    </Navigator>
  )
}

export default Routes