import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

export default function SignIn() {
  const navigation = useNavigation(); // Hook de navegação

  return (
    <View style={styles.container}>
      <Animatable.View animatable="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Animatable.Image
          animation="bounceIn" // Adicionando a animação bounceIn
          duration={1500} // Duração da animação
          iterationCount={1} // Número de repetições (1 para uma vez)
          source={require('../../assets/logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={styles.message}>Bem Vindo(a) ao For Life</Text>
      </Animatable.View>

      <Animatable.View animatable="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>E-mail</Text>
        <TextInput 
          style={styles.input}
          placeholder="E-mail"
        />
        <Text style={styles.title}>Senha</Text>
        <TextInput 
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true} // Para esconder a senha
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('HomePage')} // Navega para HomePage
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#39DAFF",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  containerHeader: {
    marginBottom: 40,
    alignItems: 'center',
  },
  message: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  containerForm: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    elevation: 5,
    marginBottom: 40, // Espaçamento entre o formulário e a logo
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#39DAFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoImage: {
    width: 150,
    height: 150,
  },
});
