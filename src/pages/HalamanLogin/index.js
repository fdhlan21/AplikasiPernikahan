
import * as React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors';

function HalamanLogin({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.white }}>
    <Image   style={{width:250, height:300, left:50, top:1 }} source={require('../../assets/img/logoaplikasi.png')}/>
<Text style={{fontFamily:'Alata-Regular', fontSize:20, textAlign:'center', top:1, fontWeight:'bold' }}>MASUK</Text>



<View style={{flexDirection:'row', padding:5,  marginHorizontal:10, marginVertical:0, top:50,}}>
<Image style={{height:15, width:20, top:5  }} source={require('../../assets/img/emailcoklatmuda.png')}  />
<Text style={{fontFamily:'Alata-Regular', fontSize:15, left:10}}>Email</Text>
</View>
<TextInput style={{marginHorizontal:10, marginVertical:0, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', top:50, borderWidth:1, borderColor:colors.primary}} />

<View style={{flexDirection:'row', padding:5,  marginHorizontal:10, marginVertical:0,  top:70}}>
<Image style={{height:20, width:20,  }} source={require('../../assets/img/passwordcoklatmuda.png')}  />
<Text style={{fontFamily:'Alata-Regular', fontSize:15, left:10}}>Password</Text>
</View>
<TextInput style={{marginHorizontal:10, marginVertical:0, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', top:70, borderWidth:1, borderColor:colors.primary }} secureTextEntry={true}  />


<View style={{flexDirection:'row', padding:5, top:100, left:13 }}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanHome')}    style={{ backgroundColor:colors.primary, padding:5, paddingVertical:1, paddingHorizontal:70, borderRadius:10, left:70, }}>

  <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:18, top:2, left:5}}>Login</Text>
  <Image style={{width:15, height:15, right:10, bottom:17, }} source={require('../../assets/img/logincoklat.png')} />
</TouchableOpacity>
</View>

<View style={{flexDirection:'row', padding:5, top:100, left:10 }}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanRegister')}  style={{ left:145, }}>
  <Text style={{color:colors.primary, fontFamily:'Alata-Regular', fontSize:15}}>Daftar</Text>
</TouchableOpacity>
</View>




    </View>
  );
}


export default HalamanLogin;