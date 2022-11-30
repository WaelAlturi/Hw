import React,{useState} from 'react';
import{Text,View,StyleSheet,FlatList,TouchableOpacity,ActivityIndicator}from 'react-native';
import People from "./people";

var RandomNumber = Math.floor(Math.random() * 7) + 1 ;

const App = ()=>{
  const [result,setResult]= useState([]);
  const [isLoading,setLoading] =useState(false);


  const getData = async () => {
      setLoading(true);
      const api ='https://fakerapi.it/api/v1/companies?_seed=12456';
      const response = await fetch(api,{
        method: 'get'
    });
      const json = await response.json();
      setResult(json.data);
      setLoading(false);
    }

  return(
    <View style={myStyle.Body}>
       {
          isLoading ? (<ActivityIndicator size='large' color ='#8EE3EF' /> ) : 
          (<TouchableOpacity style={{margin:20}} onPress={getData}>
            <Text style={myStyle.btntext}>Search</Text>
        </TouchableOpacity>)
        }
      
      <View style={{width:'100%',height:'90%'}}>
      {result?(
          <FlatList
          data={result}
          keyExtractor={item => item.id}
          renderItem={iteamRow => 
            <People  info ={iteamRow.item}/>
          }
          />
          ) :(
            <Text> No Result</Text>
          )
        }
        
      </View>
    </View>
    
  )

}

const myStyle =StyleSheet.create({
  Body:{flex:1,backgroundColor:'#786699',padding:30},
})
export default App;