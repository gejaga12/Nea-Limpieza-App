import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { CardTareaScreen } from './CardTareaScreen';
import { HeaderScreen } from './HeaderScreen';

export const CardScreen = () => {
  const navigator = useNavigation();

  return (
    <>
      {/* HEADER */}
      <HeaderScreen />
      {/* CARD */}
      <ScrollView>
      <View style={styles.fondo}>
        <CardTareaScreen />
        <CardTareaScreen />
        <CardTareaScreen />
        <CardTareaScreen />
      </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: '#dcdcdc',
    flex: 1,
  },
});
