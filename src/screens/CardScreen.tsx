import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const CardScreen = () => {
  const navigator = useNavigation();

  return (
    <>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={{}} onPress={() => navigator.pop()}>
          <Icon name="chevron-back-outline" size={35} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBienvenida}>Hola! Gerardo</Text>
      </View>
      {/* CARD */}
      <View style={styles.fondo}>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '3%',
            }}>
            <Text style={styles.textTarea}>Tarea de Limpieza</Text>
            <Text style={styles.estado}>Me recibió</Text>
          </View>
          <Text style={styles.comentario}> Santander </Text>
          <View style={styles.divisor} />
          <Text style={styles.sucursal}> Sucursal BSR 518 </Text>
          <Text style={styles.direccion}> Av. San Martin 1448 </Text>
          <View style={styles.divisor} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.fecha}> 09/11/2022 </Text>
            <Text style={styles.hora}>12:00 - 16:00</Text>
          </View>
          <View style={styles.boton}>
            <TouchableOpacity>
              <Text style={styles.textBoton}>Realizar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00b900',
    height: '10%',
    flexDirection: 'row',
    paddingTop: '3%',
    textAlign: 'center',
  },
  textoBienvenida: {
    color: 'white',
    fontSize: 30,
    paddingLeft: '10%',
  },
  fondo: {
    backgroundColor: '#dcdcdc',
    flex: 1,
  },
  card: {
    height: 370,
    backgroundColor: 'white',
    marginHorizontal: '3%',
    marginVertical: '10%',
    elevation: 8,
    paddingHorizontal: '3%',
    borderRadius: 8
  },
  textTarea: {
    color: 'black',
    fontSize: 27,
  },
  estado: {
    fontSize: 15,
    justifyContent: 'center',
    alignContent: 'center',
    textAlignVertical: 'center',
    color: '#3B83BD',
    marginTop: 10,
    fontWeight: 'bold',
  },
  divisor: {
    height: 1,
    width: '100%',
    backgroundColor: 'grey',
    marginVertical: '5%',
  },
  comentario: {
    color: '#00b900',
    marginTop: '5%',
    fontSize: 20,
  },
  sucursal: {
    color: 'black',
    fontSize: 20,
  },
  direccion: {
    color: 'black',
    fontSize: 20,
    marginTop: '4%',
  },
  fecha: {
    fontSize: 20,
    color: 'black',
  },
  hora: {
    color: 'black',
    fontSize: 20,
  },
  boton: {
    height: '10%',
    width: '40%',
    backgroundColor: 'green',
    marginLeft: '55%',
    marginVertical: '10%',
    flexDirection: 'column',
    alignItems: 'flex-end',
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textBoton: {
    fontSize: 22,
    color: 'white',
    paddingRight: '20%',
  },
});
