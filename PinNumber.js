import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from 'react-native';

const PinNumber = props => {
  const [pin, setIsPin] = useState(''); 
  
  const onSubmit = () => {
    if (pin == '') {
      ToastAndroid.show('Please Fill the pin', ToastAndroid.SHORT);
    } else if (pin.length != 6) {
      ToastAndroid.show('Please Enter the 6 length pin', ToastAndroid.SHORT);
    } else {
      props.navigation.navigate('wlcm');
    }
  };
  return (
    <SafeAreaView style={[styles.Container]}>
      <View style={[styles.SubContainer]}>
        <Image style={[styles.Img]} source={require('./Components/Hwf.jpeg')} />
        <Text style={[styles.TStyle]}> Enter 6 digits PIN</Text>
        <TextInput
          style={[styles.TInputStyle]}
          placeholder="6 digits PIN"
          placeholderTextColor={'gray'}
          onChangeText={text => setIsPin(text)}
        />
        <TouchableOpacity>
          <Text style={[styles.Forgot]}>Forgot PIN?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.PinTouch]} onPress={onSubmit}>
          <Text style={[styles.Sub]}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default PinNumber;

const styles = StyleSheet.create({
  Container: {
    flex: 1,

    backgroundColor: '#FFF',
  },
  SubContainer: {
    marginTop: 100,
  },
  Img: {
    height: 80,
    width: 150,
    alignSelf: 'center',
  },

  TStyle: {
    fontSize: 17,
    color: '#04555c',
    textAlign: 'center',
    marginVertical: 30,
    fontWeight: 'bold',
  },
  TInputStyle: {
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: '#04555c',
    marginHorizontal: 30,
    marginBottom: 20,
    color: '#04555c',
  },
  Forgot: {
    fontSize: 15,
    marginBottom: 10,
    color: '#04555c',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  PinTouch: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#04555c',
    marginHorizontal: 50,
    borderRadius: 25,
  },
  Sub: {
    textAlign: 'center',
    color: '#FFF',
  },
});
