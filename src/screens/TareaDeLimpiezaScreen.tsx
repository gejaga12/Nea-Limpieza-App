import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderScreen } from './HeaderScreen';

export const TareaDeLimpiezaScreen = () => {
  const navigator = useNavigation();

  return (
    //   HEADER
    <>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={{}} onPress={() => navigator.pop()}>
          <Icon name="chevron-back-outline" size={35} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBienvenida}>ID 19425</Text>
      </View>
      {/* TAREA */}
      <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
        <Text style={{ textAlign: 'center', fontSize: 25, color: 'black' }}>
          Limpieza Mensual Santander
        </Text>
        <View style={styles.divisor} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00b900',
    height: '10%',
    flexDirection: 'row',
    paddingTop: '5%',
    textAlign: 'center',
  },
  textoBienvenida: {
    color: 'white',
    fontSize: 30,
    paddingLeft: '10%',
  },
  divisor: {
    height: 2,
    width: '100%',
    backgroundColor: 'black',
    marginTop: 2,
  },
});
