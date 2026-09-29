import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useCart } from "../context/CartContext";
import { FontAwesome } from "@expo/vector-icons";

export default function ProductDetails({ route, navigation }) {
  const { produto } = route.params;
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);
  const { adicionarAoCarrinho } = useCart();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botaoHome}
        onPress={() => navigation.navigate("Home")}
      >
        <FontAwesome name="home" size={26} color="#fff" />
      </TouchableOpacity>
      <View style={styles.areaImagem}>
        <Image
          source={produto.imagem}
          style={styles.imagem}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.marca}>{produto.marca}</Text>
      <Text style={styles.modelo}>{produto.modelo}</Text>
      <Text style={styles.preco}>{produto.preco}</Text>

      <Text style={styles.tituloTamanho}>Tamanhos disponíveis</Text>
      <View style={styles.tamanhos}>
        <TouchableOpacity
          style={[
            styles.tamanho,
            tamanhoSelecionado === 36 && styles.tamanhoSelecionado,
          ]}
          onPress={() => setTamanhoSelecionado(36)}
        >
          <Text style={styles.textoTamanho}>36</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tamanho,
            tamanhoSelecionado === 38 && styles.tamanhoSelecionado,
          ]}
          onPress={() => setTamanhoSelecionado(38)}
        >
          <Text style={styles.textoTamanho}>38</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tamanho,
            tamanhoSelecionado === 40 && styles.tamanhoSelecionado,
          ]}
          onPress={() => setTamanhoSelecionado(40)}
        >
          <Text style={styles.textoTamanho}>40</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tamanho,
            tamanhoSelecionado === 42 && styles.tamanhoSelecionado,
          ]}
          onPress={() => setTamanhoSelecionado(42)}
        >
          <Text style={styles.textoTamanho}>42</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          if (!tamanhoSelecionado) {
            console.log("Selecione um tamanho");
            return;
          }

          adicionarAoCarrinho(produto, tamanhoSelecionado);

          navigation.navigate("Orders");
        }}
      >
        <Text style={styles.textoBotao}>Adicionar ao carrinho</Text>
      </TouchableOpacity>
      <Text style={styles.tituloDescricao}>Sobre o produto</Text>

      <Text style={styles.descricao}>{produto.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
    padding: 20,
    paddingTop: 45,
  },

  botaoHome: {
    alignSelf: "flex-start",
    marginBottom: 15,
  },

  areaImagem: {
    width: "80%",
    height: 200,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  imagem: {
    width: "75%",
    height: "75%",
    alignSelf: "center",
  },

  marca: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },

  modelo: {
    fontSize: 17,
    color: "#bbb",
    marginTop: 4,
  },

  preco: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#B8860B",
    marginTop: 12,
  },

  tituloTamanho: {
    fontSize: 17,
    fontWeight: "600",
    color: "#fff",
    marginTop: 25,
    marginBottom: 12,
  },

  tamanho: {
    borderWidth: 1,
    borderColor: "#666",
    backgroundColor: "#282828",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  tamanhoSelecionado: {
    backgroundColor: "#B8860B",
    borderColor: "#B8860B",
  },
  textoTamanho: {
    color: "#fff",
    fontWeight: "600",
  },

  tamanhos: {
    flexDirection: "row",
    gap: 10,
  },

  botao: {
    backgroundColor: "#B8860B",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  tituloDescricao: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 30,
    marginBottom: 8,
  },

  descricao: {
  fontSize: 15,
  color: "#bbb",
  lineHeight: 24,
  textAlign: "justify",
  },
  
});
