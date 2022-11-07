import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
      <View style={styles.card}></View>
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
  logo: {
    height: 90,
    width: 80,
  },
  card: {
    backgroundColor: '#dcdcdc',
    flex: 1,
  },
});
