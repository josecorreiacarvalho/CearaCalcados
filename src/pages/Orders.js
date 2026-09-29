import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { useCart } from "../context/CartContext";
import { FontAwesome } from "@expo/vector-icons";

export default function Orders({ navigation }) {
  const {
    carrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    removerDoCarrinho,
  } = useCart();
  const total = carrinho.reduce((soma, item) => {
    const preco = Number(
      item.preco.replace("R$", "").replace(".", "").replace(",", ".").trim(),
    );

    return soma + preco * item.quantidade;
  }, 0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botaoHome}
        onPress={() => navigation.navigate("Home")}
      >
        <FontAwesome name="home" size={26} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.titulo}>Meu Carrinho</Text>

      {carrinho.length === 0 ? (
        <View style={styles.vazio}>
          <Text style={styles.textoVazio}>Nenhum produto no carrinho.</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={carrinho}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item, index }) => (
              <View style={styles.card}>
                <Image
                  source={item.imagem}
                  style={styles.imagem}
                  resizeMode="contain"
                />

                <View style={styles.info}>
                  <Text style={styles.marca}>{item.marca}</Text>
                  <Text style={styles.modelo}>{item.modelo}</Text>
                  <Text style={styles.tamanho}>Tamanho: {item.tamanho}</Text>
                  <Text style={styles.preco}>{item.preco}</Text>
                  <View style={styles.quantidade}>
                    <TouchableOpacity
                      style={styles.botaoQuantidade}
                      onPress={() => diminuirQuantidade(index)}
                    >
                      <Text style={styles.textoQuantidade}>−</Text>
                    </TouchableOpacity>

                    <Text style={styles.numeroQuantidade}>
                      {item.quantidade}
                    </Text>

                    <TouchableOpacity
                      style={styles.botaoQuantidade}
                      onPress={() => aumentarQuantidade(index)}
                    >
                      <Text style={styles.textoQuantidade}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={styles.botaoRemover}
                    onPress={() => removerDoCarrinho(index)}
                  >
                    <Text style={styles.textoRemover}>Remover</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
          <View style={styles.areaTotal}>
            <Text style={styles.textoTotal}>Total:</Text>

            <Text style={styles.valorTotal}>
              R$ {total.toFixed(2).replace(".", ",")}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.botaoPagar}
            onPress={() => navigation.navigate("Payment")}
          >
            <Text style={styles.textoBotaoPagar}>Ir para pagamento</Text>
          </TouchableOpacity>
        </>
      )}
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

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#282828",
    borderRadius: 15,
    padding: 12,
    alignItems: "center",
    marginBottom: 12,
  },

  imagem: {
    width: 110,
    height: 110,
    backgroundColor: "#fff",
    borderRadius: 12,
  },

  info: {
    flex: 1,
    marginLeft: 15,
  },

  marca: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#fff",
  },

  modelo: {
    fontSize: 14,
    color: "#bbb",
    marginTop: 3,
  },

  tamanho: {
    fontSize: 15,
    color: "#fff",
    marginTop: 10,
  },

  preco: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#B8860B",
    marginTop: 6,
  },

  botaoPagar: {
    backgroundColor: "#B8860B",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  textoBotaoPagar: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  vazio: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textoVazio: {
    color: "#bbb",
    fontSize: 17,
  },
  quantidade: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 12,
  },

  botaoQuantidade: {
    width: 32,
    height: 32,
    backgroundColor: "#B8860B",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  textoQuantidade: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  numeroQuantidade: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  botaoRemover: {
    marginTop: 10,
    alignSelf: "flex-start",
  },

  textoRemover: {
    color: "#ff6b6b",
    fontSize: 14,
    fontWeight: "600",
  },
  areaTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },

  textoTotal: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  valorTotal: {
    color: "#B8860B",
    fontSize: 22,
    fontWeight: "bold",
  },
});
