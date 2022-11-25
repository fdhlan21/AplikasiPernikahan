
import * as React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors';




function HalamanPembayaran({navigation}) {

constructor() 




  return (



    
    <View style={{ flex: 1,   backgroundColor:colors.white}}>

<View style={{padding:5, backgroundColor:colors.primary, paddingVertical:6, borderBottomRightRadius:10, borderBottomLeftRadius:10,}}>
<Text style={{color:colors.white, fontFamily:'Alata-Regular',  textAlign:'center', fontSize:20, top:10}}>Pembayaran</Text>
<TouchableOpacity  style={{bottom:0, left:5}} onPress={()=>navigation.navigate('HalamanInputCalonIsteri')}  >
    <Image style={{width:35, height:35, bottom:20}} source={require('../../assets/img/backarrow.png')}/>
</TouchableOpacity>
</View>



<View style={{flexDirection:'row', padding:5, top:90,  paddingVertical:10}}>
<Text style={{fontFamily:'Alata-Regular', left:20, }}>Total Pembayaran </Text>
</View>

<View style={{padding:5, backgroundColor:colors.white, borderWidth:2, borderColor:colors.primary, paddingVertical:20, margin:20, borderRadius:10, top:65, }}>
  <Text style={{fontFamily:'Alata-Regular', textAlign:'center'}}>Rp. 600.000,-</Text>
</View>



<View style={{flexDirection:'row', padding:5,top:90,  paddingVertical:10}}>
<Text style={{fontFamily:'Alata-Regular', left:20, }}>Transfer ke </Text>
</View>
<View style={{padding:5, backgroundColor:colors.white, borderWidth:2, borderColor:colors.primary, paddingVertical:20, margin:20, borderRadius:10, top:65, }}>
<Text style={{fontFamily:'Alata-Regular', }}>Bank : </Text>
  <Text style={{fontFamily:'Alata-Regular',}}>No Rek : </Text>
  <Text style={{fontFamily:'Alata-Regular', }}>Nama : </Text>
</View>
<View style={{flexDirection:'row', paddingVertical:50}}></View>

<View  style={{paddingHorizontal:10, backgroundColor:colors.primary, padding:1, top:160}}></View>

<View style={{flexDirection:'row', top:160, paddingVertical:10, }}>

<TouchableOpacity onPress={()=>navigation.navigate('HalamanHome')}  style={{left:80}}>
  <Image  style={{width:30, height:30, }} source={require('../../assets/img/homecoklatmuda.png')}/>
</TouchableOpacity>


<TouchableOpacity    onPress={()=>navigation.navigate('HalamanProfile')}   style={{ left:220}}>
  <Image  style={{width:30, height:30,}} source={require('../../assets/img/profilecoklatmuda.png')}/>
</TouchableOpacity>

</View>


</View>
  );
}


export default HalamanPembayaran;