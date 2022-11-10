import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export const HeaderScreen = () => {

  const navigator = useNavigation();

  return (
    <View style={styles.header}>
        <TouchableOpacity style={{}} onPress={() => navigator.pop()}>
          <Icon name="chevron-back-outline" size={35} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBienvenida}>Hola! Gerardo</Text>
      </View>
    )
}

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
});