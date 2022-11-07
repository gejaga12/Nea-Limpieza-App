import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

type Nav = {
  navigate: (value: string) => void;
}

export const InicioScreen = () => {

  const navigator = useNavigation<Nav>();

  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'column', flex: 1}}>
          <ImageBackground
            style={styles.imgBackground}
            source={{
              uri: 'https://i.ytimg.com/vi/Ev2wtedUrEM/maxresdefault.jpg',
            }}>
            <TouchableOpacity
              style={styles.boton}
              onPress={() => navigator.navigate('HomeScreen')}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textBoton}>Iniciar sesión</Text>
              </View>
            </TouchableOpacity>
            <Image
              style={styles.logoNea}
              source={{
                uri: 'https://serviciosnea.com.ar/wp-content/uploads/2021/04/Soluciones-en-Limpieza-02.png',
              }}
            />
          </ImageBackground>
        </View>

        <View style={{flex: 1}}>
          <View style={{backgroundColor: '#dcdcdc', flex: 1}}>
            <Text style={styles.titulo}>Nosotros</Text>
            <View style={styles.divisor} />
            <Text style={styles.descripcion}>
              Brindamos soluciones integrales a Empresas, Organismos Oficiales,
              Administradores de Consorcios y Propietarios de Edificios. Siempre
              enfocando nuestro horizonte en la transformación de los ambientes
              en espacios más saludables, logrando así mejorar la calidad de
              vida de nuestra comunidad.
            </Text>

            <Text style={styles.titulo}>Clientes</Text>
            <View style={styles.divisor} />
            <View style={{flex: 1}}>
              <Image
                style={styles.clientesNea}
                source={require('../assets/CLIENTESNEAok.png')}
              />
            </View>
            <View style={styles.footer}>
              <Text style={styles.textFooter}>
                Desde el año 2010{' '}
                <Text style={{fontWeight: 'bold'}}>
                  &copy; NEA SERVICIOS INTEGRALES{' '}
                </Text>
                brinda soluciones y procesos orientados a la higiene.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  divisor: {
    borderWidth: 3,
    borderRadius: 10,
    width: '50%',
    alignSelf: 'center',
    borderColor: '#00b900',
    marginBottom: 12,
  },
  clientesNea: {
    height: 270,
    width: 350,
    marginLeft: 20,
    marginVertical: 10,
    marginBottom: 22,
  },
  footer: {
    backgroundColor: '#14287b',
    height: 80,
    width: '100%',
    flex: 1,
  },
  textFooter: {
    textAlign: 'center',
    color: 'white',
    paddingTop: 5,
    margin: 15,
  },
  titulo: {
    color: 'black',
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 28,
    fontWeight: 'bold',
  },
  descripcion: {
    color: 'black',
    marginHorizontal: 21,
    fontSize: 15,
    textAlign: 'center',
  },
  logoNea: {
    height: 150,
    width: 150,
    marginLeft: 100,
    marginTop: 50,
    backgroundColor: 'rgba(52, 155, 100, 0.3)',
    borderRadius: 30,
    padding: '25%',
  },
  textBoton: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  boton: {
    backgroundColor: '#00b900',
    borderRadius: 8,
    elevation: 10,
    width: '35%',
    marginLeft: '60%',
    marginTop: '5%',
    padding: 6,
    paddingLeft: 7,
  },
  imgBackground: {
    flex: 1,
    height: '110%',
    marginBottom: 25,
  },
});
