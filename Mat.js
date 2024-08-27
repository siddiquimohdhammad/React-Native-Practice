import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  
  const Mat = () => {
    // const {name}=route.params;
    let data = [
      'jdh','Hammad','hjdsf'
    ];
  
    const [text, setText] = useState('');
  
    const handleTextChange = newText => {
      setText(newText);
      // console.log(newText);
    };
  
    const clear = () => {
      setText('');
    };
  
    return (
      <View style={{backgroundColor: '#f5f5f5'}}>
        {/* <Text style={{color: 'black', margin: 10}}>Followers:{name}</Text> */}
        <Text style={{color: 'black', margin: 10}}>Mat: {text}</Text>
        {/* <FlatList
        style={{backgroundColor:'white',borderColor:'black',borderRadius:18,borderWidth:1}}
        data={data} 
        renderItem={({item})=><Text style={{color:'black',padding:11,marginHorizontal:5,backgroundColor:"#dcdcdc"}}>{item}</Text>}
        
        /> */}
  
        <TextInput
          style={styles.inputStyle}
          value={text}
          placeholder="Enter name"
          onChangeText={handleTextChange} // Handle text change with onChangeText
        />
  
        <Text style={{color: 'black', marginLeft: 10}}>Name is:{text}</Text>
  
        <TouchableOpacity onPress={clear}>
          <Text style={styles.btn}>Clear</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Mat;
  
  const styles = StyleSheet.create({
    btn: {
      width: 250,
      height: 50,
      backgroundColor: 'lightgreen',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: 0.2,
      color: 'black',
      padding: 10,
      fontSize: 15,
      alignContent: 'center',
    },
  
    inputStyle:{
      backgroundColor: '#fff',
      margin: 10,
      padding: 10,
      color: 'black',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
    }
  });
  