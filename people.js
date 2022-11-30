import React from 'react';
import { Text,View,StyleSheet,Image } from 'react-native';

const People = (props) =>{
  let {AgeFromDate} = require('age-calculator');
  let ageFromDate = new AgeFromDate(new Date(props.info.contact.birthday)).age;
 
  
    return(
        <View style={myStyle.row}>
            <Image style={myStyle.imgBB} source={{url:props.info.image}}/>
            <View style={{margin:2}}>
                <Text>{props.info.contact.firstname}</Text>
                <Text>{props.info.country}</Text>
                <Text>{ageFromDate}</Text>
            </View>
            <Text>{props.info.contact.lastname}</Text>
            <Text style={{marginLeft:20}}>{props.info.contact.gender}</Text>
        </View>
    )
}

const myStyle = StyleSheet.create({
    row:{
        width:'100%',backgroundColor:'#ffffff', borderRadius:20,marginBottom:22, padding:10,marginTop:20,flexDirection:'row',
    },
    imgBB:{
        width:'30%',height:130,
      },
})


export default People;