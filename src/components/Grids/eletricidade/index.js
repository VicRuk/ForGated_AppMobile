import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {Image, TextInput, AsyncStorage, Modal, Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import SwipeableRow from '../../Linhas/Usuarios';
import api from '../../../services/api';
import url from '../../../services/url';
import { styles } from './style';
import { showMessage, hideMessage } from "react-native-flash-message";
import { EvilIcons, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
//import * as ImagePicker from 'expo-image-picker';

const DadosProps= {
    data: {
        cod_eletrica: string,
        voltagem: string,                
    }
}


CardUsuarios = ({ data }= DadosProps) => {
   
    const [abrirModal, setAbrirModal] = useState(false);
    const navigation= any = useNavigation();
        
      
    return (
        <>
            {data.cod_eletrica === undefined && data.voltagem === undefined ?
               <Text style={{ color: '#000', fontSize: 13, marginTop:10, alignContent:"center", textAlign:"center" }}>Nenhum Registro Encontrado :(</Text>
                :
                <View>
                    <View style={styles.box} onPress={() => setAbrirModal(true)}>
                        <View style={styles.cod}>     
                            <Text style={styles.textCod}>{data.cod_eletrica}</Text>
                        </View> 
                        <View style={styles.registro}> 
                            <Text style={styles.textRegistro}> {data.voltagem}</Text>
                        </View>
                    </View>
                </View>    
            }
        </>
    );
}

export default CardUsuarios;