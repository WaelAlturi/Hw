import React from 'react';
import { Text,View,StyleSheet,Image } from 'react-native';

const People = (props) =>{
    return(
        <View style={myStyle.row}>
            <View>
            <Text>{props.info.name}</Text>
            </View>
        </View>
    )
}

const myStyle = StyleSheet.create({
    row:{
        width:'100%',
        backgroundColor:'#ffffff', borderRadius:8,
        marginBottom:22, padding:20,marginTop:20
    },
})


export default People;