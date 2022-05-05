import React from "react";
import { Input, Icon, Box, Center, NativeBaseProvider } from "native-base";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from "@expo/vector-icons";

const Search = () => {
  return (
    <Box space={4} w="90%" alignItems="left">
      <Input 
        backgroundColor = '#fff'
        w={{  base: "85%",  md: "15%", pd: "10%" }} 
        InputLeftElement={<Icon as={<MaterialIcons name="search" color="#535D6F" />} size={5} ml="2"/>} 
        InputRightElement={<Icon as={<MaterialCommunityIcons name="barcode-scan" size={24} color="#535D6F" />} pr="6" size={5} ml="2" />} 
        placeholder="Искать на OZON" 
        variant='rounded'
      />
    </Box>
  )
}

export default Search