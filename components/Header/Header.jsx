import { HStack, View } from 'native-base'
import React from 'react-native'
import Search from '../Search'
import Notifications from './Notifications'

export const Header = () => {
  return(
    <View 
      style={{ 
        backgroundColor: '#17191D', 
        paddingTop: 50, 
        padding: 10
      }}
    >
      <HStack alignItems='center' justifyContent='space-between' >
        <Search/>
        <Notifications/>
      </HStack>
    </View>
  )
}