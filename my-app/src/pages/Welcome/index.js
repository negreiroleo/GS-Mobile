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
    <View style={style.container}>

      <View style={styles.containerLogo}>
        <Image
         source={require('../../assets/logotipo.png')}
         style={  {width: '100%'} }
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
    textalign: 'center',
    fontfamily: 'Segoe UI',
    fontsize: '64px',
    fontstyle: 'normal',
    fontweight: 400,
    lineheight: 'normal',
    width: '430px', 
  },
  button: {
    borderradius: '8px',
    background: '#000',
    display: 'inlineflex',
    padding: '16px',
    flexdirection: 'column',
    alignitems: 'flex-start',
    gap: '10px',
  },

  buttonText: {
    width: '140px',
    color: '#39DAFF',
    textalign: 'center',
    fontfamily: 'Segoe UI',
    fontsize: '16px',
    fontstyle: 'normal',
    fontweight: 400,
    lineheight: '24px', /* 150% */
  },

  })