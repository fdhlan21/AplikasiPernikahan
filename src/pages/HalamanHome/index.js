
import React , { useState, useEffect} from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors';
import { SliderBox } from 'react-native-image-slider-box';

function HalamanHome({navigation}) {


const images = [

require('../../assets/img/masjid.png'),
require('../../assets/img/slider2.png'),


]

  
  return (
    <View style={{ flex: 1,  backgroundColor:colors.white }}>

<View style={{backgroundColor:colors.primary, padding:10, paddingVertical:20, borderBottomLeftRadius:20, borderBottomRightRadius:20 }}>

<Image  style={{width:55, height:50, left:280,top:50}} source={require('../../assets/img/logosidaniremove.png')} />
<Text style={{fontSize:12, color:colors.white, fontFamily:'Alata-Regular', bottom:30 }}>Selamat datang</Text>
<Text style={{fontSize:25, color:colors.white, fontFamily:'Alata-Regular', bottom:30}}>SiDani</Text>
<Text style={{fontSize:12, color:colors.white, fontFamily:'Alata-Regular', bottom:30 }}>Sistem Informasi Pendaftaran Nikah</Text>
<Text style={{fontSize:12, color:colors.white, fontFamily:'Alata-Regular', bottom:30 }}>Masjid Agung Baitul Makmur</Text>
</View>


<View style={{ bottom:30,left:15 }}>

<SliderBox  style={{width:330, height:156, }}   images={images} dotColor="brown" dotStyle={{height:10, width:10, right:15}} />


</View>


<View style={{flexDirection:'row',  padding:5, paddingVertical:5, top:0}}>

<TouchableOpacity   onPress={()=>navigation.navigate('HalamanDaftarNikah')}  style={{padding:5, backgroundColor:colors.primary, bottom:0, paddingHorizontal:30, borderRadius:10, paddingVertical:20, left:30, elevation:6, }}>
  <Image style={{width:60, height:60, bottom:5, left:5}}   source={require('../../assets/img/daftarnikha.png')} />
  <Text style={{color:colors.white, fontFamily:'Alata-Regular', left:0, fontSize:10, top:5}}>Daftar nikah</Text>
</TouchableOpacity>



<TouchableOpacity  onPress={()=>navigation.navigate('HalamanKhutbahJumat')}   style={{padding:5, backgroundColor:colors.primary, paddingHorizontal:25, left:80,  borderRadius:10, paddingVertical:15, elevation:6 }}>
<Image  style={{width:33, height:71, bottom:10, left:20 }} source={require('../../assets/img/khutbah.png')} />
<Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:10, bottom:0,}}>Khutbah jum’at</Text>
</TouchableOpacity>




</View>


<View  style={{paddingHorizontal:10, backgroundColor:colors.primary, padding:1, top:200}}></View>

<View style={{flexDirection:'row', top:200, paddingVertical:10,}}>

<TouchableOpacity style={{left:80}}>
  <Image  style={{width:30, height:30, }} source={require('../../assets/img/homecoklat.png')}/>
</TouchableOpacity>


<TouchableOpacity    onPress={()=>navigation.navigate('HalamanProfile')}   style={{ left:220}}>
  <Image  style={{width:30, height:30,}} source={require('../../assets/img/usercoklat.png')}/>
</TouchableOpacity>

</View>

</View>
  );
}


export default HalamanHome;