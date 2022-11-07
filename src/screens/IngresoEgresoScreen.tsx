import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const IngresoEgresoScreen = () => {
  return (
    <View style={{backgroundColor: '#dcdcdc'}}>
      <View style={{paddingTop: 90, paddingBottom: 90}}>
        <Text
          style={
            styles.textoBienvenida
          }>{`Bienvenido!\n¿Con que ROL desea ingresar?`}</Text>
      </View>

      <View>
        <View style={{marginLeft: '25%'}}>
          <TouchableOpacity style={styles.boton}>
            <Text style={styles.textBoton}>Administración</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginLeft: '25%'}}>
          <TouchableOpacity style={styles.boton}>
            <Text style={styles.textBoton}>Empleado</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textBoton: {
    color: 'white',
    alignSelf: 'center',
    paddingTop: 6,
    fontSize: 20,
  },
  boton: {
    height: '40%',
    width: '65%',
    backgroundColor: '#00b900',
    borderRadius: 7,
    elevation: 6,
  },
  textoBienvenida: {
    textAlign: 'center',
    color: '#3c3c3c',
    fontSize: 26,
  },
});
