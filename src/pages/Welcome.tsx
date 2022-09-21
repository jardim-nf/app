import React from 'react';
import {SafeAreaView, 
Text,
View,
Image,
TouchableOpacity,
StyleSheet,
Dimensions,} 
from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts'
import {useNavigation} from'@react-navigation/core';
import wateringImg from '../assets/watering.png';
import {Feather} from '@expo/vector-icons';


export  function Welcome(){

const navigation = useNavigation();

  function handleStart(){
   navigation.navigate('UserIdentification');
  }


return(
  <SafeAreaView style={styles.container}>
    <View style= {styles.wrapper}>
      <Text style = {styles.title}>
          Gerencie {'\n'}
          seu banho
          de {'\n'} 
          forma fácil.
      </Text>

      <Image 
      source={wateringImg} 
      style={styles.image}
      resizeMode = "contain"
      />

      <Text style = {styles.subTitle}>
         Aqui vamos agendas os banhos e também 
         ensinar como funciona o plantio das ervas.
      </Text>

      <TouchableOpacity
        style = {styles.button}
        activeOpacity={0.7}
        onPress={handleStart}
        >
          <Feather name="chevron-right" 
          style = {styles.buttonIcon}/>
      </TouchableOpacity>
      </View>
  </SafeAreaView>
)
}
const styles = StyleSheet.create({
container:{
  flex:1,
 
},
wrapper:{
  flex:1,
  alignItems : 'center',
  justifyContent: 'space-around',
  paddingHorizontal: 20,
},
title: {
  fontSize: 28,
  fontWeight: 'bold',
  textAlign: 'center',
  color: colors.heading,
  marginTop: 38,
  fontFamily: fonts.heading,
  lineHeight: 34
},
subTitle:{
  textAlign: 'center',
  fontSize: 18,
  paddingHorizontal: 20,
  color: colors.heading,
  fontFamily: fonts.text
},



image:{
  height: Dimensions.get('window').width * 0.7
},

button:{
  backgroundColor: colors.green,
  justifyContent: 'center',
  alignItems:'center',
  borderRadius:16,
  marginBottom: 10,
  height:56,
  width:56
},
buttonIcon:{
  color: colors.white,
  fontSize: 32,

}
});
