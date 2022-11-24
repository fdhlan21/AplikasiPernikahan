
import * as React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors';

function HalamanRegister({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.white
   }}>
<Text style={{fontFamily:'Alata-Regular', fontSize:30, textAlign:'center', top:120, fontWeight:'bold',  }}>DAFTAR</Text>



<View style={{flexDirection:'row', padding:5,  marginHorizontal:10, marginVertical:0, top:150,}}>
<Image style={{height:20, width:20,  }} source={require('../../assets/img/usercoklat.png')}  />
<Text style={{fontFamily:'Alata-Regular', fontSize:15, left:10}}>Nama</Text>
</View>
<TextInput style={{marginHorizontal:10, marginVertical:0, backgroundColor:colors.white, borderRadius:10, elevation:6 ,color:colors.black, fontFamily:'Alata-Regular', top:150, borderWidth:1, borderColor:colors.primary }} />


<View style={{flexDirection:'row', padding:5,  marginHorizontal:10, marginVertical:0, top:170,}}>
<Image style={{height:15, width:20, top:5 }} source={require('../../assets/img/emailcoklat.png')}  />
<Text style={{fontFamily:'Alata-Regular', fontSize:15, left:10}}>Email</Text>
</View>
<TextInput style={{marginHorizontal:10, marginVertical:0, backgroundColor:colors.white, borderRadius:10, elevation:6 ,color:colors.black, fontFamily:'Alata-Regular', top:170,borderWidth:1, borderColor:colors.primary }} />



<View style={{flexDirection:'row', padding:5,  marginHorizontal:10, marginVertical:0,  top:190}}>
<Image style={{height:20, width:20,  }} source={require('../../assets/img/passwordcoklat.png')}  />
<Text style={{fontFamily:'Alata-Regular', fontSize:15, left:10}}>Password</Text>
</View>
<TextInput style={{marginHorizontal:10, marginVertical:0, backgroundColor:colors.white, borderRadius:10, elevation:6 ,color:colors.black, fontFamily:'Alata-Regular', top:190, borderWidth:1, borderColor:colors.primary }} secureTextEntry={true}  />


<View style={{flexDirection:'row', padding:5,  marginHorizontal:10, marginVertical:0,  top:210}}>
<Image style={{height:20, width:20,  }} source={require('../../assets/img/passwordcoklat.png')}  />
<Text style={{fontFamily:'Alata-Regular', fontSize:15, left:10}}>Ulangi Password</Text>
</View>
<TextInput style={{marginHorizontal:10, marginVertical:0, backgroundColor:colors.white, borderRadius:10, elevation:6 ,color:colors.black, fontFamily:'Alata-Regular', top:210, borderWidth:1, borderColor:colors.primary }} secureTextEntry={true}  />


<View style={{flexDirection:'row', padding:5, top:230, }}>
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanLogin')}  style={{ backgroundColor:colors.primary, padding:10, paddingVertical:15, paddingHorizontal:80, borderRadius:10, left:70, elevation:6, }}>
  <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15}}>Daftar</Text>
</TouchableOpacity>
</View>





    </View>
  );
}


export default HalamanRegister;