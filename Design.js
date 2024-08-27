import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Modal} from 'react-native';

const Design = () => {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();
  const et6 = useRef();

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={{padding: 20}}>
      <View style={{transform: [{rotate: '45deg'}]}}>
        <Text
          style={{
            position: 'absolute',
            left: '80%',
            bottom: 50,
            color: 'black',
            padding: 10,
          }}>
          Hammad
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 50,
        }}>
        <TextInput
          ref={et1}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={txt => {
            if (txt.length >= 1) {
              et2.current.focus();
            } else if (txt.length === 0) {
              et1.current.focus();
            }
          }}
          style={styles.inputBox}
        />
        <TextInput
          ref={et2}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={txt => {
            if (txt.length >= 1) {
              et3.current.focus();
            } else if (txt.length === 0) {
              et1.current.focus();
            }
          }}
          style={styles.inputBox}
        />
        <TextInput
          ref={et3}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={txt => {
            if (txt.length >= 1) {
              et4.current.focus();
            } else if (txt.length === 0) {
              et2.current.focus();
            }
          }}
          style={styles.inputBox}
        />
        <TextInput
          ref={et4}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={txt => {
            if (txt.length >= 1) {
              et5.current.focus();
            } else if (txt.length === 0) {
              et3.current.focus();
            }
          }}
          style={styles.inputBox}
        />
        <TextInput
          ref={et5}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={txt => {
            if (txt.length >= 1) {
              et6.current.focus();
            } else if (txt.length === 0) {
              et4.current.focus();
            }
          }}
          style={styles.inputBox}
        />
        <TextInput
          ref={et6}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={txt => {
            if (txt.length === 0) {
              et5.current.focus();
            }
          }}
          style={styles.inputBox}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setIsModalVisible(true);
          }}
          style={{borderRadius: 10, alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              backgroundColor: 'indigo',
              padding: 20,
              borderRadius: 15,
              fontSize: 15,
            }}>
            Ok
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        presentationStyle="pageSheet">
        <View style={{}}>
          <Text style={{color: 'white', padding: 10, backgroundColor: 'red'}}>
            ksfjieuo
          </Text>
          {/* <Button title='close' onPress={()=>{setIsModalVisible(false)}}/> */}
          <TouchableOpacity
            onPress={() => {
              setIsModalVisible(false);
            }}
            style={{borderRadius: 10, alignItems: 'center'}}>
            <Text
              style={{
                color: 'white',
                backgroundColor: 'indigo',
                padding: 20,
                borderRadius: 15,
                fontSize: 15,
              }}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    elevation: 2,
    padding: 15,
    color: 'black',
    marginTop: 10,
    width: 50,
    textAlign: 'center',
  },
});

export default Design;
