
import * as React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors';




function HalamanKhutbahJumat({navigation}) {

constructor() 




  return (



    
    <View style={{ flex: 1,   backgroundColor:colors.white}}>

<View style={{padding:5, backgroundColor:colors.primary, paddingVertical:10, borderBottomRightRadius:10, borderBottomLeftRadius:10,}}>
<Text style={{color:colors.white, fontFamily:'Alata-Regular',  textAlign:'center', fontSize:20, top:10}}>Khutbah Jum'a</Text>
<TouchableOpacity onPress={()=>navigation.navigate('HalamanHome')}>
    <Image style={{width:35, height:35, bottom:20}} source={require('../../assets/img/backarrow.png')}/>
</TouchableOpacity>
</View>

<ScrollView>


<View style={{flexDirection:'row', padding:5, top:50,  paddingVertical:10}}>
<Text style={{fontFamily:'Alata-Regular', left:20, }}>jum’at, 25 November 2022: </Text>
</View>

<TouchableOpacity  onPress={()=>navigation.navigate('HalamanInfoKhutbah')} style={{padding:5, backgroundColor:colors.white, borderWidth:2, borderColor:colors.primary, paddingVertical:0, margin:20, borderRadius:10, top:35, elevation:6, backgroundColor:colors.primary}}>
  <Text style={{fontFamily:'Alata-Regular', color:colors.white, textAlign:'center', top:20, }}>Khatib : Ustadz Anwar</Text>
  <Image  style={{width:50, height:50, bottom:10}} source={require('../../assets/img/profileustad.png')} />
</TouchableOpacity>

<View style={{flexDirection:'row', padding:5, top:50,  paddingVertical:10}}>
<Text style={{fontFamily:'Alata-Regular', left:20, }}>jum’at, 25 November 2022: </Text>
</View>

<TouchableOpacity style={{padding:5, backgroundColor:colors.white, borderWidth:2, borderColor:colors.primary, paddingVertical:0, margin:20, borderRadius:10, top:35, elevation:6, backgroundColor:colors.primary}}>
  <Text style={{fontFamily:'Alata-Regular', color:colors.white, textAlign:'center', top:20, }}>Khatib : Ustadz Anwar</Text>
  <Image  style={{width:50, height:50, bottom:10}} source={require('../../assets/img/profileustad.png')} />
</TouchableOpacity>


<View style={{flexDirection:'row', padding:5, top:50,  paddingVertical:10}}>
<Text style={{fontFamily:'Alata-Regular', left:20, }}>jum’at, 25 November 2022: </Text>
</View>

<TouchableOpacity style={{padding:5, backgroundColor:colors.white, borderWidth:2, borderColor:colors.primary, paddingVertical:0, margin:20, borderRadius:10, top:35, elevation:6, backgroundColor:colors.primary}}>
  <Text style={{fontFamily:'Alata-Regular', color:colors.white, textAlign:'center', top:20, }}>Khatib : Ustadz Anwar</Text>
  <Image  style={{width:50, height:50, bottom:10}} source={require('../../assets/img/profileustad.png')} />
</TouchableOpacity>


<View style={{flexDirection:'row', padding:5, top:50,  paddingVertical:10}}>
<Text style={{fontFamily:'Alata-Regular', left:20, }}>jum’at, 25 November 2022: </Text>
</View>

<TouchableOpacity style={{padding:5, backgroundColor:colors.white, borderWidth:2, borderColor:colors.primary, paddingVertical:0, margin:20, borderRadius:10, top:35, elevation:6, backgroundColor:colors.primary}}>
  <Text style={{fontFamily:'Alata-Regular', color:colors.white, textAlign:'center', top:20, }}>Khatib : Ustadz Anwar</Text>
  <Image  style={{width:50, height:50, bottom:10}} source={require('../../assets/img/profileustad.png')} />
</TouchableOpacity>



<View style={{flexDirection:'row', paddingVertical:50}}></View>


</ScrollView>

<View  style={{paddingHorizontal:10, backgroundColor:colors.primary, padding:1, top:1}}></View>

<View style={{flexDirection:'row', top:1, paddingVertical:10, }}>

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


export default HalamanKhutbahJumat;