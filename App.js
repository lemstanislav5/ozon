import { StatusBar } from 'expo-status-bar';
import React, { StyleSheet, Text, View, Image } from 'react-native';
import { NativeBaseProvider, Box, Button, Center, ScrollView, Heading } from "native-base";
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer'
import { products } from './data'
import SortableGridView from 'react-native-sortable-gridview'

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto"/>
      <View style={{flex: 1}}>
        <Header/>
        <ScrollView columns={3} spacing={5}>
            <Box style={{marginTop: 10}} p={5}>
              <Heading sixe='lg' color='#111'>
                Успей купить!
              </Heading>
              <View mt={10} flexErap='wrap' justifyContent='space-between'>
              <SortableGridView
                data={products}
                onDragStart={() => {
                  console.log('Default onDragStart');
                }}
                onDragRelease={(data) => {
                  console.log('Default onDragRelease', data);
                }}
                renderItem={(product, i) => {
                  return (
                    <Box key={`product ${i}`} style={{height: 200, alignItems: 'center', padding: 5, marginBottom: 10}}>
                    <Image style={{width: 100, height: 100, flex: 1, position: 'relative' }}
                      size='md'
                      resizeMode="cover"
                      source={{
                        uri: product.image,
                        position: 'relative'
                      }}
                      alt={product.name}
                    />
                    {product.type !== null
                      ? <Text style={{ flex: 1, position: 'absolute', textAlign: 'center', bottom: 20, fontWeight: 700, color: '#fc1f1f'}}>
                          {product.type}
                        </Text>
                      :<></>
            
                    }
                    <Text style={{  flex: 1, position: 'relative', textAlign: 'center', margin: 5}}>
                      {product.name}
                    </Text>
                    <Text  style={{  flex: 1, position: 'relative', textAlign: 'center', margin: 5}}>
                      {product.price.toLocaleString('ru-Ru', {
                        style: 'currency',
                        currency: 'RUB'
                      })}
                    </Text>
                    <Button 
                      style={{ 
                        width: 150, 
                        height: 100, 
                        flex: 1, 
                        position: 'relative', 
                        textAlign: 'center', 
                        margin: 5,
                        backgroundColor: '#333'
                      }}
                      onPress={() => console.log("hello world")}>В корзину</Button>
                  </Box>
                  )
                }}
              />
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
