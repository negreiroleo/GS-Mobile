import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
  const navigation = useNavigation();

  const handleTilePress = () => {
    navigation.navigate('Form'); // Navegar para a página 'Form' ao pressionar a tile
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Conteúdo da HomePage */}
      </View>

      {/* Tile com navegação para a página 'Form' */}
      <TouchableOpacity style={styles.tile} onPress={handleTilePress}>
        {/* Conteúdo da Tile */}
        <Image source={require('../../assets/prontuario.png')} style={styles.icon} />
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Image source={require('../../assets/home.png')} style={styles.footerIcon} />
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  tile: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 400,
    position: 'relative',
  },
  icon: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -40,
    marginTop: -40,
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
