import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Home = ({navigation }) => {
  // let handlePress=()=>{
  //   console.log("hii")
  // }
    const [count, setCount] = useState(0);
    let clear=()=>{
      // console.log("hii")
      setCount(0)
    }
  return (
       
    <View>
      <Text style={styles.countText}>Count : {count}</Text>
      <Button
        title="Increase Counter"
        onPress={() => {
        //   console.log(count);
          setCount(count + 1);
        }}
      />
      <Button
      title='clear'
      onPress={clear}
      />
    
    <Button
      title='details'
      onPress={()=>{navigation.navigate('Detail')}}
      />
  <View style={{flex:1,justifyContent:'center',alignItems:'center',margin:10}}>

      <TouchableOpacity style={{}} 
      onPress={()=>{navigation.navigate('material'
      //   ,{
      //   name:"Hammad"
      // }
      
      )}}>
        {/* <Text style={{color:'indigo'}}>Press</Text> */}
        <Text style={styles.btn}>Press</Text>
      </TouchableOpacity>
  </View>

    </View>
  )
}

export default Home


const styles = StyleSheet.create({
    countText:{
      color:'red',
      fontSize:20,
      backgroundColor:'indigo'
    },
    btn:{
      width:250,
      height:50,
      backgroundColor : "lightgreen",
      alignItems : "center",
      justifyContent : "center",
      borderColor : "black",
      borderWidth : 0.2,
      color:'black',
      padding:10,
      fontSize:15,
      alignContent:'center'
      
    }
  });