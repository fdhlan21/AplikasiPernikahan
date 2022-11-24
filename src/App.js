// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import HalamanLogin from './pages/HalamanLogin';
import HalamanRegister from './pages/HalamanRegister';
import HalamanHome from './pages/HalamanHome';
import HalamanDaftarNikah from './pages/HalamanDaftarNikah';
import HalamanInputCalonSuami from './pages/HalamanInputCalonSuami';
import HalamanInputCalonIsteri from './pages/HalamanInputCalonIsteri';
import HalamanPembayaran from './pages/HalamanPembayaran';
import HalamanKhutbahJumat from './pages/HalamanKhutbahJumat';
import HalamanInfoKhutbah from './pages/HalamanInfoKhutbah';
import HalamanProfile from './pages/HalamanProfile';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HalamanLogin'>
        <Stack.Screen name="HalamanLogin" component={HalamanLogin}  options={{headerShown:false}}  />
        <Stack.Screen name="HalamanRegister" component={HalamanRegister}  options={{headerShown:false}}  />
        <Stack.Screen name="HalamanHome" component={HalamanHome}  options={{headerShown:false}}  />
        <Stack.Screen name="HalamanDaftarNikah" component={HalamanDaftarNikah}  options={{headerShown:false}}  />
        <Stack.Screen name="HalamanInputCalonSuami" component={HalamanInputCalonSuami}  options={{headerShown:false}}  />
        <Stack.Screen name="HalamanPembayaran" component={HalamanPembayaran}  options={{headerShown:false}}  />
        <Stack.Screen name="HalamanInputCalonIsteri" component={HalamanInputCalonIsteri}  options={{headerShown:false}}  />
        <Stack.Screen name="HalamanKhutbahJumat" component={HalamanKhutbahJumat}  options={{headerShown:false}}  />
        <Stack.Screen name="HalamanInfoKhutbah" component={HalamanInfoKhutbah}  options={{headerShown:false}}  />
        <Stack.Screen name="HalamanProfile" component={HalamanProfile}  options={{headerShown:false}}  />





      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;