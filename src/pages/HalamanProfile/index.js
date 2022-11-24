
import * as React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors';




function HalamanProfile({navigation}) {
  return (



    
    <View style={{ flex: 1,   backgroundColor:colors.white}}>

<View style={{padding:5, backgroundColor:colors.primary, paddingVertical:6, borderBottomRightRadius:10, borderBottomLeftRadius:10,}}>
<Text style={{color:colors.white, fontFamily:'Alata-Regular',  textAlign:'center', fontSize:20, top:10}}>Pembayaran</Text>
<TouchableOpacity  style={{bottom:0, left:5}} onPress={()=>navigation.navigate('HalamanHome')}  >
    <Image style={{width:35, height:35, bottom:20}} source={require('../../assets/img/backarrow.png')}/>
</TouchableOpacity>
</View>

<View style={{flexDirection:'row', paddingVertical:100,top:20 }}>
    <View style={{paddingVertical:20, margin:20, backgroundColor:colors.white, padding:5, paddingHorizontal:65, borderRadius:10, elevation:6, borderWidth:2, borderColor:colors.primary, bottom:90, left:10}}>
<Text style={{fontFamily:'Alata-Regular', fontSize:15,top:30, left:20, letterSpacing:2, fontWeight:'bold' }}>Aulia</Text>
<Text style={{fontFamily:'Alata-Regular', fontSize:15,top:10, left:70,  letterSpacing:2, fontWeight:'bold' }}> Abdi</Text>
<Image style={{width:50, height:50, right:50, bottom:30}} source={require('../../assets/img/profileustad.png')}/>
<TouchableOpacity    onPress={()=>navigation.navigate('HalamanLogin')}  style={{padding:5, backgroundColor:colors.danger, paddingVertical:5,  paddingHorizontal: 50,  borderRadius:10, elevation:6, left:40}}>
<Text  style={{fontSize:20, color:colors.white, fontFamily:'Alata-Regular', }}>Keluar</Text>
</TouchableOpacity>   
    </View>

  


</View>

</View>
  );
}


export default HalamanProfile;