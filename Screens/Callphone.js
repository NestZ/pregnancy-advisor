import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {Linking} from 'react-native'
import {ListItem} from 'react-native-elements';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
const list = [
  {
    name: 'สถาบันการแพทย์ฉุกเฉิน(1669)',
    phoneNumber : 'tel:${1669}'
  },
  {
    name: 'แจ้งเหตุด่วน เหตุร้าย (191)',
    phoneNumber : 'tel:${191}'
  },
  {
    name: 'หน่วยแพทย์กู้ชีพ (1554)',
    phoneNumber :'tel:${1554}'
  },
]


 

export default class Callphone extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
           header: () => null
        } 
      }
    render () {
        return (
          <View style={styles.container}> 
            <View style={styles.header}>
            <Text style={styles.headerText}> เบอร์ฉุกเฉิน </Text>
            </View>
          { list.map((l, i) => (
         <ListItem
          key={i}
          title={l.name}
          onPress={()=>Linking.openURL(l.phoneNumber)}
          style = {styles.button}
          fontFamily ={"SB - Modern"}
          /> ))}
</View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    header:{
      backgroundColor: '#f5424e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
    padding: 5,
    borderBottomWidth: 1,
    width:'100%',
    justifyContent:'center',
    alignSelf:'center',
    borderColor:"gray",
    backgroundColor:"white",
    },
    buttonText:{
      fontSize: responsiveFontSize(2.9),
      fontFamily: "SB - Modern"
    },
    headerText:{
      color: 'white',
      fontSize: 33,
      fontFamily: "SB - Modern",
      padding: 15,
    },
    baseText: {
      fontSize: responsiveFontSize(2.9),
      fontFamily: "SB - Modern"
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  })