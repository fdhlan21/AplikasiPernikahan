
import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Button, Platform, StyleSheet, TouchableHighlight,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker'

function HalamanDaftarNikah({navigation}) {

const [date, setDate] = useState(new Date()); 
const [mode, setMode] = useState('date');
const [show, setShow, ] = useState(false);
const [text, setText] = useState('Tanggal');
const [waktu, setWaktu] = useState('Waktu');

const onChange = (event, selectedDate) => {

  const {
    type,
    nativeEvent: {timestamp},
  } = event;

const currentDate = selectedDate || date;
setShow(Platform.OS === 'ios'); 
setDate(currentDate);

let tempDate = new Date(currentDate);
let fDate =  'Tanggal: ' + tempDate.getDate() + '/'  + (tempDate.getMonth() + 1) +  '/' + tempDate.getFullYear ();
let fTime = 'Jam: ' +  tempDate.getHours() + '.' + tempDate.getMinutes() +  ' WIB';
setWaktu(`${fTime}\n`)   
setText(`${fDate}\n`)
console.log(fDate)





}





const showMode = (currentMode) => {

setShow(true);
setMode(currentMode);
}
  


  return (


    
    <View style={{ flex: 1,  backgroundColor:colors.white}}>

{show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
          negativeButton={{label: 'Batal', textColor:colors.danger}}
          positiveButton={{label: 'OK', textColor:colors.success}} 
        
          
         
        />
      )}



<View style={{backgroundColor:colors.primary, paddingVertical:5, borderBottomLeftRadius:10, borderBottomRightRadius:10,
}}>
  <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:20, textAlign:'center', top:10 }}>Daftar Nikah</Text>
  <TouchableOpacity   onPress={()=>navigation.navigate('HalamanHome')}  style={{ bottom:20, left:10}}>
    <Image style={{width:35, height:35,}} source={require('../../assets/img/backarrow.png')}/>
  </TouchableOpacity>
</View>




<View style={{flexDirection:'row',  paddingVertical:10, top:0}}>
<Text style={{fontFamily:'Alata-Regular', fontSize:12, left:20}}>Booking Tempat</Text>
</View>

<View style={{backgroundColor:colors.white, padding:5, borderWidth:1, borderColor:colors.primary, marginHorizontal:20, paddingVertical:15, borderRadius:10, }}>
<Text style={{fontFamily:'Alata-Regular' , textAlign:'center'}}>Masjid Agung Baitul Makmur Meulaboh</Text>
  
</View>



<View style={{flexDirection:'row',  paddingVertical:10, top:0, }}>
<Text style={{fontFamily:'Alata-Regular', fontSize:12, left:20}}>Booking Tanggal</Text>
</View>

<View style={{backgroundColor:colors.white, padding:5, borderWidth:1, borderColor:colors.primary, marginHorizontal:20, paddingVertical:5, borderRadius:10,  bottom:5}}>
<Text style={{ fontSize:15, top:10, left:10, fontFamily:'Alata-Regular' }}>{text}</Text>
<TouchableOpacity   onPress={() => showMode('date')}   style={{left:280, bottom:10}}>

  <Image   style={{width:20, height:21, }}  source={require('../../assets/img/tanggal.png')}/>
</TouchableOpacity>
  
</View>


<View style={{flexDirection:'row',  paddingVertical:10,  bottom:5}}>
<Text style={{fontFamily:'Alata-Regular', fontSize:12, left:20,}}>Waktu</Text>
</View>


<View style={{backgroundColor:colors.white, padding:5, borderWidth:1, borderColor:colors.primary, marginHorizontal:20, paddingVertical:5, borderRadius:10, bottom:5}}>
<Text style={{ fontSize:15, top:10, left:10, fontFamily:'Alata-Regular'}}>{waktu}</Text>
<TouchableOpacity   onPress={() => showMode('time')}  style={{left:280, bottom:10}}>
  <Image  style={{width:20, height:21, }}  source={require('../../assets/img/waktu.png')}/>
</TouchableOpacity>
  
</View>

<View style={{flexDirection:'row',  paddingVertical:10,  bottom:5}}>
<Text style={{fontFamily:'Alata-Regular', fontSize:12, left:20}}>Oleh/Wali sendiri/KUA Kec/Lainnya</Text>
</View>
<TextInput style={{marginHorizontal:20, backgroundColor:colors.white, borderRadius:10, borderWidth:1, borderColor:colors.primary, color:colors.black, fontFamily:'Alata-Regular',  bottom:5 }}  placeholder='Oleh/ Wali Sendiri/KUA Kec/Lainnya' placeholderTextColor={'gray'} /> 


<View style={{flexDirection:'row',   top:20, paddingVertical:5}}>
  <TouchableOpacity onPress={()=>navigation.navigate('HalamanInputCalonSuami')} style={{ backgroundColor:colors.primary, left:70, borderRadius:10, paddingHorizontal:70, paddingVertical:10, }}>
    <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15,}}>Selanjutnya</Text>
  </TouchableOpacity>
</View>


<View  style={{paddingHorizontal:10, backgroundColor:colors.primary, padding:1, top:172}}></View>

<View style={{flexDirection:'row', top:172, paddingVertical:10, }}>

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


export default HalamanDaftarNikah;
