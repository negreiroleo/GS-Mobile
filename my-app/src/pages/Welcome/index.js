import React from "react";
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Image
         source={require('../../assets/logotipo.png')}
         style={{ width: '100%' }}
         resizeMode="contain"
        /> 
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Seja Bem-Vindo ao For Life</Text>

        <TouchableOpacity style={styles.button}>
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
  },
  containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#000',
    display: 'flex',
    padding: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  buttonText: {
    width: 140,
    color: '#39DAFF',
    textAlign: 'center',
    fontFamily: 'Segoe UI',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
  },
});
