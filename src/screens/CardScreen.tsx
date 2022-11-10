import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CardTareaScreen } from './CardTareaScreen';
import { HeaderScreen } from './HeaderScreen';

export const CardScreen = () => {

  const navigator = useNavigation();

  return (
    <>
      {/* HEADER */}
      <HeaderScreen/>
      {/* CARD */}
      <View style={styles.fondo}>
        <CardTareaScreen />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: '#dcdcdc',
    flex: 1,
  },
});
