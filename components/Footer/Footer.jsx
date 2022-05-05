import { HStack, View, Icon, Text, Box } from 'native-base'
import React from 'react'
import { menu } from './menu'
import { MaterialIcons } from "@expo/vector-icons";

export const Footer = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff', 
        padding: 15,
        paddingTop: 5, 
        borderTop: '1px solid #B3B3B3'
      }}
    >
      <HStack alignItems='center' justifyContent='space-between' >
          {menu.map((item, i) => {
            return (
              <View key={i} alignItems='center'>
                {item.num !== undefined
                  ?<Box style={{ 
                    position: 'absolute', 
                    backgroundColor: '#4EBB62', 
                    borderRadius: 30, 
                    padding: 2, 
                    marginLeft: 30,
                    marginTop: -5, 
                    minWidth: 24, 
                    alignItems: 'center' }}
                    _text={{
                      color: '#fff', 
                      fontWeight: 'bold',
                      fontSize: 12
                    }}
                  >{item.num}</Box>
                  :<></>}
                <Icon key={i} as={<MaterialIcons name={item.icon} color="#535D6F" />} size={30} ml="2"/>
                <Text>{item.title}</Text>
              </View>
            )
          })}
      </HStack>
    </View>
  )
}
