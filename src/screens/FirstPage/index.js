import { useNavigation } from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import {styles} from './style';
import LottieView from 'lottie-react-native';
import {
    TouchableOpacity,
    View,
    Text,
    TextInput,
    Image,
    StatusBar,
    Alert,
  } from 'react-native';

  
  
  //import { Splash } from '../../lotties/Splash'; 
  import api from '../../services/api';

  export default function Login() {
    const navigation= useNavigation();

    async function login(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Entrar' }]
        });
    }
    const [isPressed, setIsPressed] = useState(false);
    const handlePress = () => {
      setIsPressed(true);
    };
    const handleRelease = () => {
      setIsPressed(false);
    };
  

    return(
    <View style={styles.container}>
      <Image source={require('../../assets/fundo.png')} style={styles.backgroundImage}/>

      <LottieView
        source={require('../../assets/animation.json')}
        autoPlay
        loop={true}
        style={styles.videoCasa}
      />

      <View style={styles.top}>
        <Image source={require('../../assets/logo.png')} style={styles.logohome}/>
      </View>
      <Text style={styles.text}>
        ForGated
      </Text>
      <Text style={styles.textSecondary}>
        Segurança e conforto
      </Text>
      <Text style={styles.textSecondary}>
        para o seu lar
      </Text>
        <TouchableOpacity
          style={[
            styles.login,
            isPressed ? { backgroundColor: '#000' } : null
          ]}
          onPress={login}
          onPressIn={handlePress}
          onPressOut={handleRelease}
          activeOpacity={1}>
          <Text style={[styles.textBotao, { color: isPressed ? 'white' : 'black' }]}>Conectar-Se</Text>
        </TouchableOpacity>
    </View>
    )
  }