import React from "react";
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
      <Animatable.Image
        animation="flipInY"
        source={require('../../assets/logo.png')}
        style={styles.logoImage}
      />

      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Seja Bem-Vindo ao For Life</Text>

        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
  
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#39DAFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Espaçamento horizontal para o container
  },
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50, // Margem superior para acomodar a logo
  },
  logoImage: {
    width: 200, // Largura da imagem
    height: 200, // Altura da imagem
    resizeMode: 'contain', // Ajuste da imagem para evitar distorção
    marginBottom: 20, // Espaçamento inferior após a logo
  },
  title: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Segoe UI',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 40,
    width: 300,
    marginBottom: 20, // Espaçamento inferior após o título
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#000',
    display: 'flex',
    padding: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 10,
    width: '100%', // Largura total para os botões
  },
  buttonText: {
    width: '100%',
    color: '#39DAFF',
    textAlign: 'center',
    fontFamily: 'Segoe UI',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
  },
});

