import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function FormPage() {
  const navigation = useNavigation();

  const navigateToHomePage = () => {
    navigation.navigate('HomePage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={[styles.title, { fontFamily: 'Segoe UI' }]}>Prontuário</Text>

        <TextInput
          style={[styles.input, { backgroundColor: '#fff', borderColor: '#fff', color: '#000', fontFamily: 'Segoe UI' }]}
          placeholder="Médico"
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#fff', borderColor: '#fff', color: '#000', fontFamily: 'Segoe UI' }]}
          placeholder="Data"
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#fff', borderColor: '#fff', color: '#000', fontFamily: 'Segoe UI' }]}
          placeholder="Hora"
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#fff', borderColor: '#fff', color: '#000', fontFamily: 'Segoe UI' }]}
          placeholder="Observações"
          placeholderTextColor="#000"
        />

        <TouchableOpacity style={styles.button} onPress={navigateToHomePage}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>

      {/* Footer da FormPage */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={navigateToHomePage}>
          <Image source={require('../../assets/home.png')} style={styles.footerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#39DAFF",
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000',
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#39DAFF',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
});
