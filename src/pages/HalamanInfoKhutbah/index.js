
import * as React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors';




function HalamanInfoKhutbah({navigation}) {

constructor() 




  return (



    
    <View style={{ flex: 1,   backgroundColor:colors.white}}>

<View style={{padding:5, backgroundColor:colors.primary, paddingVertical:10, borderBottomRightRadius:10, borderBottomLeftRadius:10,}}>
<Text style={{color:colors.white, fontFamily:'Alata-Regular',  textAlign:'center', fontSize:20, top:10}}>Jum’at, 25 November 2022</Text>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanKhutbahJumat')}   >
    <Image style={{width:35, height:35, bottom:20}} source={require('../../assets/img/backarrow.png')}/>
</TouchableOpacity>
</View>




<View style={{flexDirection:'row', top:20,  paddingVertical:200, backgroundColor:colors.white, borderWidth:2, borderColor:colors.primary, margin:20,borderRadius:10, elevation:6, }}>
<Text style={{color:colors.black, fontFamily:'Alata-Regular', lineHeight:20, fontSize:15, bottom:160, left:10, color:colors.primary}}>Info Shalat Jum'at Masjid Agung Baitul Makmur Meulaboh</Text>

<Text style={{fontFamily:'Alata-Regular', right:260, fontSize:15, bottom:80, lineHeight:20, color:colors.primary}}>Jadwal Jumat, 25-11-22
Masjid Agung</Text>

<Text style={{fontFamily:'Alata-Regular', right:530, lineHeight:20, bottom:20, fontSize:15, color:colors.primary}}>Khatib: Ust. Anwar
Imam: Tgk. H. Cut Usman
Qari: Tgk.Irwanto, S.Pd.I.
Muazzin: Tgk. Ali Murdani</Text>

<Text style={{fontFamily:'Alata-Regular', fontSize:15, right:835, top:70, lineHeight:20, color:colors.primary,}}>Live di Radio RRI Meulaboh
‌
Ikuti info seputar Masjid Agung di @masjidagung.official</Text>

</View>


<View  style={{paddingHorizontal:10, backgroundColor:colors.primary, padding:1, top:80}}></View>

<View style={{flexDirection:'row', top:80, paddingVertical:10, }}>

<TouchableOpacity onPress={()=>navigation.navigate('HalamanHome')}  style={{left:80}}>
  <Image  style={{width:30, height:30, }} source={require('../../assets/img/homecoklat.png')}/>
</TouchableOpacity>


<TouchableOpacity    onPress={()=>navigation.navigate('HalamanProfile')}   style={{ left:220}}>
  <Image  style={{width:30, height:30,}} source={require('../../assets/img/usercoklat.png')}/>
</TouchableOpacity>

</View>

</View>
  );
}


export default HalamanInfoKhutbah;