import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Success({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.check}>✓</Text>

      <Text style={styles.titulo}>Pedido realizado com sucesso!</Text>

      <Text style={styles.texto}>Obrigado por comprar na Ceará Calçados.</Text>
      <TouchableOpacity
        style={styles.botaoHome}
        onPress={() => navigation.navigate("Home")}
      >
        <FontAwesome name="home" size={22} color="#fff" />
        <Text style={styles.textoHome}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  check: {
    fontSize: 70,
    color: "#B8860B",
    marginBottom: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  texto: {
    fontSize: 16,
    color: "#bbb",
    textAlign: "center",
    marginTop: 12,
  },
  botaoHome: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#B8860B",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 30,
  },

  textoHome: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
