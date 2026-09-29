import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={require("../images/logo.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.areaBotoes}>
        <TouchableOpacity
  style={styles.botao}
  onPress={() => {
    console.log("Products");
    navigation.navigate("Products");
  }}
>
  <FontAwesome name="shopping-bag" size={26} color="#fff" />
  <Text style={styles.textoBotao}>Produtos</Text>
</TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Orders")}
        >
          <FontAwesome name="shopping-cart" size={26} color="#fff" />
          <Text style={styles.textoBotao}>Carrinho</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
background: {
  flex: 1,
  width: "100%",
  height: "100%",
  justifyContent: "flex-end",
},

  areaBotoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 35,
    gap: 12,
  },

  botao: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "rgba(0, 0, 0, 0.55)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.45)",
    borderRadius: 12,

    paddingVertical: 15,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 8,
  },
});