import React from "react";
import { SafeAreaView, StyleSheet} from "react-native";

import TelaHome from './src/screen/home/index';

function App() {
  return <SafeAreaView style={estilo.scren}>
    <TelaHome />
  </SafeAreaView>
}

const estilo = StyleSheet.create({
  scren: {
    flex: 1,
  }
})

export default App;