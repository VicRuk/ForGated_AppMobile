import React, { useEffect, useState } from 'react';
import { styles } from './style';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import {SafeAreaView, Text, View, ScrollView, TouchableOpacity, Image, ActivityIndicator, RefreshControl, StatusBar, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialIcons } from '@expo/vector-icons';
//import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import DrawerRoutes from '../../routes/drawer.routes';
import { useIsFocused } from '@react-navigation/native';
import CustomDrawer from '../../components/CustomDrawer';
import { set } from 'react-native-reanimated';


export default function Home() {
    const { width, height } = Dimensions.get('window');
    const navigation= useNavigation();
    const [quantGas, setQuantGas] = useState([]);
    const [quantIncendio, setQuantIncendio] = useState([]);
    const [quantProximidade, setQuantProximidade] = useState([]);
    const [quantEletricidade, setQuantEletricidade] = useState([]);
    const [showAlertButtonGas, setShowAlertButtonGas] = useState(false);
    const [showAlertButtonIncendio, setShowAlertButtonIncendio] = useState(false);
    const [showAlertButtonProximidade, setShowAlertButtonProximidade] = useState(false);
    const [showAlertButtonEletricidade, setShowAlertButtonEletricidade] = useState(false);

    async function incendio(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Incendio' }]
        });
    }

    async function proximidade(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Proximidade' }]
        });
    }

    async function gas(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Gas' }]
        });
    }

    async function eletricidade(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Eletricidade' }]
        });
    }

    
      async function fetchPageGas() {
          try {
            const response = await api.get(`tcc/registro/vazamento.php`);
          setQuantGas(response.data.resultado); // Substitua pelo nome real do campo no seu banco de dados
          
          const quantiGas = response.data.resultado.map(item => item.gas_info);
          if (quantiGas == "Vazamento detectado") {
            setShowAlertButtonGas(true);
          } else {
            setShowAlertButtonGas(false);
          }
        }
          catch (error) {
            console.log(error);
          }
        }

      async function fetchPageIncendio() {
        try {
          const response = await api.get(`tcc/registro/temperatura.php`);
         setQuantIncendio(response.data.resultado); // Substitua pelo nome real do campo no seu banco de dados
        
         const quantiIncendio = response.data.resultado.map(item => item.incendio_info);
         if (quantiIncendio > 30) {
           setShowAlertButtonIncendio(true);
         } else {
           setShowAlertButtonIncendio(false);
        }
      }
         catch (error) {
          console.log(error);
        }
      }

      async function fetchPageEletricidade() {
        try {
          const response = await api.get(`tcc/registro/voltagem.php`);
        setQuantEletricidade(response.data.resultado); // Substitua pelo nome real do campo no seu banco de dados
        
        const quantiEletricidade = response.data.resultado.map(item => item.eletrica_info);
        if (quantiEletricidade > 110) {
          setShowAlertButtonEletricidade(true);
        } else {
          setShowAlertButtonEletricidade(false);
        }
      }
        catch (error) {
          console.log(error);
        }
      }

    async function fetchPageProximidade() {
      try {
        const response = await api.get(`tcc/registro/proximidade.php`);
       setQuantProximidade(response.data.resultado); // Substitua pelo nome real do campo no seu banco de dados
      
       const quantiProximidade = response.data.resultado.map(item => item.proximidade_info);
       if (quantiProximidade == "Movimento detectado") {
         setShowAlertButtonProximidade(true);
       } else {
         setShowAlertButtonProximidade(false);
      }
    }
       catch (error) {
        console.log(error);
      }
    }
    
      useEffect(() => {
        fetchPageGas(); // Busque o valor do alerta quando a tela for carregada
        fetchPageIncendio();
        fetchPageEletricidade();
        fetchPageProximidade();
      }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={styles.header}>
            <Text style={styles.primaryTilt}>Minha Casa</Text>        
            <Text style={styles.secondaryTilt}>Olá, Cliente!</Text>
              <TouchableOpacity
                style={styles.menu}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              >
              <Feather name="menu" size={30} color="white" />
              </TouchableOpacity>
          </View>   
          <View style={{ flex: 2, marginTop: 40}}>
          <View style={styles.painel}>
            <Image
              source={require('../../assets/fundo2.png')}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
            />
          {/*
            {showAlertButtonEletricidade ? (
            <View></View>
            ) : (
            <View style={styles.painelAlertaEletricidade}>
              <Text style={styles.textPainelTop}>Nenhuma sobrecarga</Text>
            </View>
            )}

            {showAlertButtonGas ? (
            <View></View>
            ) : (
            <View style={styles.painelAlertaGas}>
              <Text style={styles.textPainelTop}>Nenhum vazamento</Text>
            </View>
            )}

            {showAlertButtonProximidade ? (
            <View></View>
            ) : (
            <View style={styles.painelAlertaProximidade}>
              <Text style={styles.textPainelTop}>Nenhuma aproximação</Text>
            </View>
            )}

            {showAlertButtonIncendio ? (
            <View></View>
            ) : (
            <View style={styles.painelAlertaIncendio}>
              <Text style={styles.textPainelTop}>Nenhum risco de incendio</Text>
            </View>
            )} 
          */}
          </View>
          <Text style={styles.textAreas}>Áreas</Text>
          <View style={styles.bloco}>  
          {/* sistema de incendio */}
          {showAlertButtonIncendio === (true) ? (
            <TouchableOpacity  onPress={incendio} style={styles.painelSistemaAlerta}>
              <View style={styles.backgroundIconeAlerta}>
                <Image source={require('../../assets/temperatureIconeAlerta.png')} style={styles.icones}/>
              </View>
              <Text style={styles.painelTextAlerta}>TEMPERATURA</Text>
              <Text style={styles.painelTextEstadoAlerta}>Detectado</Text>
            </TouchableOpacity>
            ) : 
            (<TouchableOpacity  onPress={incendio} style={styles.painelSistema}>
              <View style={styles.backgroundIcone}>
                <Image source={require('../../assets/temperatureIcone.png')} style={styles.icones}/>
              </View>
              <Text style={styles.painelText}>TEMPERATURA</Text>
              <Text style={styles.painelTextEstado}>Normal</Text>
            </TouchableOpacity>
            )}
            
            {/* sistema de gas */}
            {showAlertButtonGas === (true) ? (
            <TouchableOpacity  onPress={gas} style={styles.painelSistemaAlerta}>
              <View style={styles.backgroundIconeAlerta}>
                <Image source={require('../../assets/gasIconeAlerta.png')} style={styles.icones}/>
              </View>
              <Text style={styles.painelTextAlerta}>SENSOR DE GÁS</Text>
              <Text style={styles.painelTextEstadoAlerta}>Detectado</Text>
            </TouchableOpacity>
            ) : 
            (<TouchableOpacity  onPress={gas} style={styles.painelSistema}>
              <View style={styles.backgroundIcone}>
                <Image source={require('../../assets/gasIcone.png')} style={styles.icones}/>
              </View>
              <Text style={styles.painelText}>SENSOR DE GÁS</Text>
              <Text style={styles.painelTextEstado}>Normal</Text>
            </TouchableOpacity>
            )}
          </View>

          <View style={styles.bloco}>
              {/* sistema de eletricidade */}
            {showAlertButtonEletricidade === (true) ? (
            <TouchableOpacity  onPress={eletricidade} style={styles.painelSistemaAlerta}>
              <View style={styles.backgroundIconeAlerta}>
                <Image source={require('../../assets/lampIconeAlerta.png')} style={styles.icones}/>
              </View>
              <Text style={styles.painelTextAlerta}>ELETRICIDADE</Text>
              <Text style={styles.painelTextEstadoAlerta}>Detectado</Text>
            </TouchableOpacity>
            ) : 
            (<TouchableOpacity  onPress={eletricidade} style={styles.painelSistema}>
              <View style={styles.backgroundIcone}>
                <Image source={require('../../assets/lampIcone.png')} style={styles.icones}/>
              </View>
              <Text style={styles.painelText}>ELETRICIDADE</Text>
              <Text style={styles.painelTextEstado}>Normal</Text>
            </TouchableOpacity>
            )}
            {/* sistema de proximidade */}
            {showAlertButtonProximidade === (true) ? (
            <TouchableOpacity  onPress={proximidade} style={styles.painelSistemaAlerta}>
              <View style={styles.backgroundIconeAlerta}>
                <Image source={require('../../assets/webcamIconeAlerta.png')} style={styles.icones}/>
              </View>
              <Text style={styles.painelTextAlerta}>MOVIMENTO</Text>
              <Text style={styles.painelTextEstadoAlerta}>Detectado</Text>
            </TouchableOpacity>
            ) : 
            (<TouchableOpacity  onPress={proximidade} style={styles.painelSistema}>
              <View style={styles.backgroundIcone}>
                <Image source={require('../../assets/webcamIcone.png')} style={styles.icones}/>
              </View>
              <Text style={styles.painelText}>MOVIMENTO</Text>
              <Text style={styles.painelTextEstado}>Sem Movimento</Text>
            </TouchableOpacity>
            )}
          </View> 
          {/* botões de alerta pra cada sistema */}
            {showAlertButtonGas && (
            <TouchableOpacity  onPress={gas} style={styles.alerta}>
              <Feather name="alert-triangle" size={42} color="white" right={30}/>
              <View style={styles.traco}>
                <Text style={styles.painelAlerta}>Alerta de Segurança!</Text>
                <Text style={styles.subText}>Uma irregularidade foi detectada.</Text>
              </View>
            </TouchableOpacity>
            )}
            {showAlertButtonIncendio && (
            <TouchableOpacity  onPress={incendio} style={styles.alerta}>
              <Feather name="alert-triangle" size={42} color="white" right={30}/>
              <View style={styles.traco}>
                <Text style={styles.painelAlerta}>Alerta de Segurança!</Text>
                <Text style={styles.subText}>Uma irregularidade foi detectada.</Text>
              </View>
            </TouchableOpacity>
            )}
            {showAlertButtonProximidade && (
            <TouchableOpacity  onPress={proximidade} style={styles.alerta}>
              <Feather name="alert-triangle" size={42} color="white" right={30}/>
              <View style={styles.traco}>
                <Text style={styles.painelAlerta}>Alerta de Segurança!</Text>
                <Text style={styles.subText}>Uma irregularidade foi detectada.</Text>
              </View>
            </TouchableOpacity>
            )}
            {showAlertButtonEletricidade && (
            <TouchableOpacity  onPress={eletricidade} style={styles.alerta}>
              <Feather name="alert-triangle" size={42} color="white" right={30}/>
              <View style={styles.traco}>
                <Text style={styles.painelAlerta}>Alerta de Segurança!</Text>
                <Text style={styles.subText}>Uma irregularidade foi detectada.</Text>
              </View>
            </TouchableOpacity>
            )}
              
        </View>
        </View>
    )
}