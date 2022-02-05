import React, {useEffect} from 'react';
import {
  View,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  useColorScheme,
  Image,
} from 'react-native';


const Splash = props => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {  
    setTimeout(() => {
      props.navigation.navigate('pin');
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'#FFF'}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
        translucent
      />
      <ImageBackground
        style={{flex: 1}}
        source={require('./Components/Hwf.jpeg')} resizeMode='contain'></ImageBackground>
    </SafeAreaView>
  );

};
export default Splash;


