import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState, useRef } from "react";
import { styles } from './style';
import { ScrollView, Text, ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, StatusBar, Dimensions, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Header from '../../components/Header';
import api from '../../services/api';
import Grid from '../../components/Grids/incendio';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from 'react-native-modal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

export default function Usuario() {

  const navigation = useNavigation();
  const [quant, setQuant] = useState([]);
  const [showAlertButton, setShowAlertButton] = useState([]);
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [busca, setBusca] = useState("");
  const [onEndReachedCalledDuringMomentum, setMT] = useState(true);
  const [data, setData] = useState(null);

  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  async function home() {

    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }]
    });
  }


  async function loadData() {
    try {
      const response = await api.get(`tcc/dados/temperatura.php?pagina=${page}&limite=10`);

      if (lista.length >= response.data.totalItems) return;

      if (loading === true) return;

      setLoading(true);

      setLista([...lista, ...response.data.resultado]);
      setPage(page + 1);
    } catch (error) {
      console.log(error)
    }
  }


  const renderItem = function ({ item }) {
    return (
      <Grid
        data={item}
      />
    )
  }

  function Footer() {
    if (!load) return null;

    return (
      <View style={styles.loading}>
        <ActivityIndicator size={25} color="#000" />
      </View>
    )
  }

  async function fetchPage() {
    try {
      const response = await api.get(`tcc/registro/temperatura.php`);
      setQuant(response.data.resultado); // Substitua pelo nome real do campo no seu banco de dados
      const incendio_info = response.data.resultado[0].incendio_info;
      const showAlertButton = incendio_info > 30 ? 0 : 2;
      setData({ incendio_info, showAlertButton });

      const quanti = response.data.resultado.map(item => item.incendio_info);
      if (quanti > 30) {
        setShowAlertButton(0);
      }
      else {
        setShowAlertButton(2);
      }
    }
    catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    if (data !== null) {
      if (data.showAlertButton === 0) {
      } else {
      }
    }
    fetchPage();
    loadData();

  }, [page, totalItems, lista]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', }}>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.voltar} onPress={home}>
            <AntDesign name="left" size={24} color="black" />
            <Text style={styles.textb}>Voltar</Text>
          </TouchableOpacity>
          <Text style={styles.primaryTilt}>Incêndio</Text>
        </View>
        {data !== null && typeof data.showAlertButton === 'number' && data.showAlertButton === 0 ? (
          <View style={styles.temperatureNot}>
            <Image source={require('../../assets/termometroNotsafe.gif')} style={styles.imagemTermometro} />
            <View style={styles.mostrarInfoAlerta}>
              <Text style={styles.textInfoAlerta}>{data.incendio_info}°</Text>
            </View>
          </View>
        ) : (
          <View style={styles.temperature}>
            <Image source={require('../../assets/termometroSafe.gif')} style={styles.imagemTermometro} />
            <View style={styles.mostrarInfo}>
              <Text style={styles.textInfo}>{data !== null ? data.incendio_info : ''}°</Text>
            </View>
          </View>
        )}

        <TouchableOpacity onPress={toggleBottomSheet} style={styles.bottomSheet}>
          <View style={styles.puxar}></View>
          <Text style={styles.textBottom}>Registros</Text>
        </TouchableOpacity>
        <Modal
          isVisible={isBottomSheetVisible}
          style={{ justifyContent: 'flex-end', margin: 0 }}
          onBackdropPress={toggleBottomSheet}
        >
          <View style={styles.contentBottom}>
            <TouchableOpacity onPress={toggleBottomSheet}>
              <View style={styles.sair}>
                <View style={styles.sairMarca}></View>
              </View>
              <Text style={styles.textBottomContent}>Registros</Text>
            </TouchableOpacity>
            <FlatList
              data={lista}
              renderItem={renderItem}
              keyExtractor={item => String(item.id)}
              onEndReachedThreshold={0.1}
              removeClippedSubviews
              initialNumToRender={10}
              onEndReached={(distanceFromEnd) => {
                if (!onEndReachedCalledDuringMomentum) {
                  loadData().then(() => setLoading(false));
                  setMT(true);
                }
              }}
              ListFooterComponent={(distanceFromEnd) => {
                if (!onEndReachedCalledDuringMomentum) {
                  return <Footer load={loading} />
                } else {
                  return <View></View>
                }
              }}
              onMomentumScrollBegin={() => setMT(false)}
              windowSize={10}
              getItemLayout={(data, index) => (
                { length: 50, offset: 50 * index, index }
              )}
            />
          </View>
        </Modal>
      </View>
    </View>
  )
}