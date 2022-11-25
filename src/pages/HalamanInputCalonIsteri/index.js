
import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, Button, Platform, StyleSheet }  from 'react-native';
import colors from '../../utils/colors';
import {  launchCamera, launchImageLibrary} from 'react-native-image-picker';



function HalamanInputCalonIsteri({navigation}) {

    
  const [filePath, setFilePath] = useState({});
 
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };
 
  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };
 
  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response);
 
        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };
 
  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        alert('Tidak Menjadi Pilih Gambar!');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };
 
  return (
    
    <View style={{ flex: 1, backgroundColor:colors.white,   }}>


<View style={{padding:5, backgroundColor:colors.primary, paddingVertical:6, borderBottomRightRadius:10, borderBottomLeftRadius:10,}}>
<Text style={{color:colors.white, fontFamily:'Alata-Regular',  textAlign:'center', fontSize:20, top:10}}>Input data</Text>
<TouchableOpacity style={{left:5, bottom:20, }} onPress={()=>navigation.navigate('HalamanInputCalonSuami')}  >
    <Image style={{width:35, height:35, }} source={require('../../assets/img/backarrow.png')}/>
</TouchableOpacity>
</View>

<ScrollView>

<Text style={{fontFamily:'Alata-Regular', fontSize:15, left:21, top:80, fontWeight:'bold'}}>1. DATA CALON SUAMI DAN ISTERI</Text>



<View style={{flexDirection:'row', padding:5, top:90,  paddingVertical:10}}>
<Text style={{fontFamily:'Alata-Regular', left:20, }}>Nama calon Isteri (Linto Baro)</Text>
</View>

<TextInput style={{marginHorizontal:10, backgroundColor:colors.margin, borderRadius:10, top:85, color:colors.black, fontFamily:'Alata-Regular', borderWidth:1, borderColor:colors.primary, backgroundColor:colors.white}}/>



<View style={{flexDirection:'row', padding:5,top:90,  paddingVertical:10}}>
<Text style={{fontFamily:'Alata-Regular', left:20, }}>Tempat, Tanggal lahir</Text>
</View>

<TextInput style={{marginHorizontal:10, backgroundColor:colors.margin, borderRadius:10, top:85, color:colors.black, fontFamily:'Alata-Regular', borderWidth:1, backgroundColor:colors.white, borderColor:colors.primary}}/>




<View style={{flexDirection:'row', padding:5,  top:90,  paddingVertical:10}}>
<Text style={{fontFamily:'Alata-Regular', left:20, }}>Pekerjaan</Text>
</View>

<TextInput style={{marginHorizontal:10, backgroundColor:colors.margin, borderRadius:10, top:85, color:colors.black, fontFamily:'Alata-Regular', borderWidth:1, borderColor:colors.primary, backgroundColor:colors.white, }}/>




<View style={{flexDirection:'row', padding:5, top:90,  paddingVertical:10}}>
<Text style={{fontFamily:'Alata-Regular', left:20, }}>Nomor HP</Text>
</View>

<TextInput style={{marginHorizontal:10, backgroundColor:colors.margin, borderRadius:10, top:85, color:colors.black, fontFamily:'Alata-Regular', borderWidth:1, borderColor:colors.primary, backgroundColor:colors.white, }}/>




<View style={{flexDirection:'row', padding:5,  top:90,  paddingVertical:10}}>
<Text style={{fontFamily:'Alata-Regular', left:20, }}>Alamat</Text>
</View>

<TextInput style={{marginHorizontal:10, backgroundColor:colors.margin, borderRadius:10, top:85, color:colors.black, fontFamily:'Alata-Regular', paddingBottom:50, borderWidth:1, borderColor:colors.primary, backgroundColor:colors.white, }}/>
<View style={{flexDirection:'row',top:100, padding:5,  paddingHorizontal:50, paddingVertical:100,}}>


<Image style={{}}  source={{uri:'data.image/jpeg;base64,' + filePath.data,}}/>
<Image   source={{uri: filePath.uri}}/>

<TouchableOpacity    onPress={() => chooseFile('photo')} style={{bottom:80, left:100}}  >

<Image  style={{width:50, height:50, }} source={require('../../assets/img/tambahgambar.png')}/>

</TouchableOpacity>


<TouchableOpacity    onPress={()=>navigation.navigate('HalamanPembayaran')}     style={{padding:5, backgroundColor:colors.primary,  paddingHorizontal:80,  borderRadius:10, paddingHorizontal:80, paddingVertical:20, top:80, right:20  }}>
  <Text style={{color:colors.white, fontFamily:'Alata-Regular', }}>Kirim</Text>
</TouchableOpacity>


</View>


<View style={{flexDirection:'row',  paddingVertical:50}}></View>
</ScrollView>


<View  style={{paddingHorizontal:10, backgroundColor:colors.primary, padding:1, top:1}}></View>

<View style={{flexDirection:'row', top:1, paddingVertical:10,}}>

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


export default HalamanInputCalonIsteri;

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: colors.white,
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});