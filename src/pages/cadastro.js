import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, Button, TouchableOpacity } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/dca699411eb362f4ec42f43e2991d163.jpg")}
      blurRadius={15}
    >
      <Text>Sign up</Text>
      <Text>sign up now for free!</Text>

      <View>

      </View>
    </ImageBackground>

  );
}
