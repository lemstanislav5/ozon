import { StatusBar } from 'expo-status-bar';
import React, { StyleSheet, Text, View, Image } from 'react-native';
import { NativeBaseProvider, Box, Button, Center, ScrollView, Heading } from "native-base";
import { products } from './data'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer'

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto"/>
      <View style={{flex: 1}}>
        <Header/>
        <ScrollView>
          <Box style={{marginTop: 10}} p={5}>
            <Heading sixe='lg' color='#111'>
              Успей купить!
            </Heading>
            <View mt={10} flexErap='wrap' justifyContent='space-between'>
              {products.map((product, i) => (
                <Box key={`product ${i}`} style={{width: '30%'}}>
                  <Image style={{ width: 200, height: 200, flex: 1, position: 'relative' }}
                    size='md'
                    resizeMode="cover"
                    source={{
                      uri: 'https://el-koleso.ru/image/cache/catalog/tovary/velosipedy/150/150-12-800x600.jpg',
                      position: 'relative'
                    }}
                    alt={product.name}
                  />
                  <Text>
                    {product.price.toLocaleString('ru-Ru', {
                      style: 'currency',
                      currency: 'RUB'
                    })}
                  </Text>
                </Box>
              ))}
            </View>
          </Box>
        </ScrollView>
        <Footer/>
      </View>
    </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
