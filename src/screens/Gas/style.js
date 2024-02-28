import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#407BFF",
    alignItems: 'center',
    paddingHorizontal: 40,
    justifyContent: 'center'
  },

  header:{
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center'
  },

  imagemGas:{
    width: 200,
    height: 450,
    bottom: 50,
  },

  imagemGas2:{
    width: 200,
    height: 450,
    left: -10,
    bottom: 45,
  },

  registro:{
    position: 'absolute',
    bottom: 0,
   left: 0,
    right: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 80,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },

  registroText:{
    fontWeight: 'bold',
    fontSize: 17,
    left: 15
  },

  bottomSheet:{
    backgroundColor: 'white',
    height: 75,
    position: 'absolute',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
  },

  contentBottom:{
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  textBottom:{
    left: 22,
    fontWeight: 'bold',
    fontSize: 18,
  },

  textBottomContent:{
    left: 20,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 25,
  },

  sair:{
    left:0,
    right: 0,
    height: 30,
    top: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  sairMarca:{
    height: 7,
    width: 75,
    borderRadius: 10,
    backgroundColor: '#000',
  },

  voltar:{
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 19,
    left: 25
  },

  alerta:{
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    top: 225,
    height: 465,
    alignItems: 'center',
    backgroundColor: '#D41717'
  },

  alertaNot:{
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    top: 225,
    height: 465,
    alignItems: 'center',
    backgroundColor: '#4971AD'
  },

  gasErro:{
    width: 400,
    height: 400,
    bottom: 70,
  },

  textb:{
    fontWeight: 'bold'
  },

  primaryTilt:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 27,
    fontFamily: fonts.text,
  },

  secondaryTilt:{
    marginLeft: 40,
    fontSize: 15,
    fontFamily: fonts.text,
  },

primaryTilt:{
  marginTop: 15,
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 23,
  fontFamily: fonts.text,
},

secondaryTilt:{
  marginLeft: 40,
  fontSize: 15,
  fontFamily: fonts.text,
},

puxar:{
  height: 7,
  width: 75,
  borderRadius: 10,
  backgroundColor: '#D9D9D9',
  left: 160,
  marginBottom: 5
},

mostrarInfo:{
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  backgroundColor: '#005BFF',
  borderWidth: 1,
  width: 130,
  height: 60,
  elevation: 20,
  top: 350,
  position: 'absolute'
},

textInfo:{
  color: 'white',
  fontSize: 22,
  fontWeight: 'bold'
},

mostrarInfoAlerta:{
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  backgroundColor: '#BA0606',
  borderWidth: 1,
  width: 140,
  height: 70,
  elevation: 20,
  top: 350,
  position: 'absolute'
},

textInfoAlerta:{
  color: 'white',
  fontSize: 19,
  fontWeight: 'bold'
},
})