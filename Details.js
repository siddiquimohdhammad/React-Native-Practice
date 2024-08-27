import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';

let Details = ({navigation}) => {
  const [data, setData] = useState(null); // Initialize as null to handle the initial loading state

  useEffect(() => {
    fetch('https://api.github.com/users/siddiquimohdhammad')
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Set the data received from the API
        // console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    ); // Handle the loading state
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cont}>
        
      <Image
        source={{ uri: data.avatar_url }}
        style={styles.avatar}
        />
      <Text style={styles.text}>Name: {data.name}</Text>
        </View>
        
      <Text style={styles.text}>Followers: {data.followers}</Text>
     
      <Text style={styles.text}>Twitter: {data.twitter_username}</Text>


      <TouchableOpacity 
      onPress={()=>navigation.navigate('material'
      //   ,{
      //   name:[data.followers]
      // }
    
    )}
      
      >
        <Text style={{color:'black'}}>Press</Text>
        
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    // alignItems: 'end',
    // justifyContent: 'center',
    padding: 10,
    color:'black',
    // backgroundColor:'red'
  },
  cont:{
    
    flexDirection:"row"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    
    // marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: 'black', // Ensure the text is black
    marginTop: 10,  // Add some margin to the text
    backgroundColor: 'lightgrey', // Temporary background to see the text
    padding: 10,
    margin:2,
  },
});

export default Details;