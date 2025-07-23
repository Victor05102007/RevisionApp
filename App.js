import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, Button, TouchableOpacity } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("./src/assets/images/9e9f1f7c45309c6e3a4c45ce39552c91.jpg")}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <AntDesign name="dingding" size={130} color="#d22e2e" alignItems='center' justifyContent='center' />

        <Text style={styles.Hermez}>Hermez</Text>
        <StatusBar style="auto" />
        <Text style={styles.Description}>Your next big step starts here with us</Text>
        <StatusBar style="auto" />

        <TouchableOpacity
          style={styles.botao}
          onPress={() => alert("Login feito com sucesso!")}
        >
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoCadastro}
          onPress={() => alert("Você foi para a tela de cadastro")}
        >
          <Text style={styles.textCadastro}>Cadastro</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Description: {
    color: '#fff'
  },

  Hermez: {
    color: '#fff',
    marginTop: '50',
    fontSize: '30',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botao: {
    width: 160,
    padding: 10,
    backgroundColor: "#52170b",
    color: "white",
    alignItems: "center",
    marginTop: 70,
    borderRadius: 13,
    borderWidth: 3,
    borderColor: "#d11507"
  },

  textLogin: {
    color: '#fff',
    fontSize: 19,
  },

  textCadastro: {
    color: '#d1d5d9'
  },

  botaoCadastro: {
    width: 160,
    padding: 10,
    backgroundColor: "transparent",
    color: "white",
    alignItems: "center",
    marginTop: 10,
  },
});
