import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {GradientBackgroud} from '../components/GradientBackgroud';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';

type Nav = {
  navigate: (value: string) => void;
}

export const HomeScreen = () => {
  const navigator = useNavigation<Nav>();
  const [password, setPassword] = useState(true);

  return (
    <>
      <GradientBackgroud>
        <View>
          <View style={styles.logoNea}>
            <Image
              style={{height: 180, width: 180}}
              source={{
                uri: 'https://serviciosnea.com.ar/wp-content/uploads/2021/04/Soluciones-en-Limpieza-02.png',
              }}
            />
          </View>

          <View style={{paddingVertical: 50}}>
            <TextInput
              style={styles.input}
              placeholder="Usuario"
              placeholderTextColor="grey"
            />

            <View
              style={{flexDirection: 'row', alignItems: 'center', zIndex: 0}}>
              <TextInput
                style={{
                  ...styles.input,
                  width: '66%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                placeholder="Contraseña"
                textContentType="password"
                secureTextEntry={password}
                placeholderTextColor="grey"
              />
              <Pressable
                onPress={() => setPassword(!password)}
                style={styles.verPassword}>
                <Icon
                  name={password ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color="black"
                />
              </Pressable>
            </View>
          </View>

          <View style={{width: 290, paddingLeft: 120}}>
            <TouchableOpacity
              style={styles.boton}
              onPress={() => navigator.navigate('CardScreen')}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textBoton}>Iniciar sesión</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </GradientBackgroud>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    color: 'black',
    backgroundColor: 'white',
    height: 40,
    marginTop: 10,
    marginHorizontal: 70,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBoton: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    flex: 1,
  },
  boton: {
    backgroundColor: '#00b900',
    height: 40,
    width: 180,
    paddingTop: 2,
    borderRadius: 5,
    elevation: 8,
  },
  verPassword: {
    zIndex: 1,
    position: 'absolute',
    paddingLeft: 305,
    paddingTop: 8,
  },
  logoNea: {
    marginHorizontal: 120,
    marginTop: 10,
    paddingTop: 50,
  },
});
