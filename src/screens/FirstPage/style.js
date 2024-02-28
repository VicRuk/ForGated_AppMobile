import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#fff",
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    top:{
      position: 'absolute',
      top: 0,
      height: 120,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'row',
    },
    logohome:{
      width: 90,
      height: '15%',
      right: 20
    },

    videoCasa:{
      width: 370,
      height: 370,
      bottom: 10,
    },

    login:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      marginTop: 15,
      width: '90%',
      height: 55,
      borderRadius: 30,
      bottom: 25,
      position: 'absolute',
      borderWidth: 1,
      borderColor: 'black',
    },
    text:{
      color: '#000',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: fonts.text,
      marginBottom: 3,
    },

    textSecondary:{
      color: '#000',
      fontSize: 18,
      marginBottom: -5,
      fontFamily: fonts.text,
    },

    textBotao:{
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: fonts.text,
    },



})


