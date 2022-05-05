import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { Box } from 'native-base';

const Notifications = () => {
  return (
    <Box style={{ position: 'relative'}} alignItems="center" w="10%">
      <Ionicons name="notifications-outline" size={30} color="#fff" />
      <Box 
        style={{ 
          position: 'absolute', 
          backgroundColor: '#ff6768', 
          borderRadius: 30, 
          padding: 2, 
          marginLeft: 25,
          marginTop: -10, 
          minWidth: 28, 
          alignItems: 'center' }}
        _text={{
          color: '#fff', 
          fontWeight: 'bold',
          fontSize: 12
        }}
      >
        40
      </Box>
    </Box>
  )
}

export default Notifications