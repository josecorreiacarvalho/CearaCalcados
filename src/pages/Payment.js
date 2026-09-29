import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import { useCart } from "../context/CartContext";
import { FontAwesome } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";

export default function Payment({ navigation }) {
  const { carrinho, limparCarrinho } = useCart();

  const quantidadeTotal = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0,
  );

  const valorTotal = carrinho.reduce((soma, item) => {
    const preco = Number(
      item.preco.replace("R$", "").replace(".", "").replace(",", ".").trim(),
    );

    return soma + preco * item.quantidade;
  }, 0);

  const [formaPagamento, setFormaPagamento] = useState(null);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity
        style={styles.botaoHome}
        onPress={() => navigation.navigate("Home")}
      >
        <FontAwesome name="home" size={26} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.titulo}>Pagamento</Text>

      <View style={styles.resumo}>
        <Text style={styles.subtitulo}>Resumo do pedido</Text>

        <Text style={styles.texto}>
          Produtos no carrinho: {quantidadeTotal}
        </Text>

        <Text style={styles.preco}>
          Total: R$ {valorTotal.toFixed(2).replace(".", ",")}
        </Text>
      </View>

      <Text style={styles.subtituloPagamento}>Forma de pagamento</Text>

      {/* PIX */}
      <TouchableOpacity
        style={[
          styles.opcao,
          formaPagamento === "PIX" && styles.opcaoSelecionada,
        ]}
        onPress={() => setFormaPagamento("PIX")}
      >
        <Text style={styles.textoOpcao}>PIX</Text>
      </TouchableOpacity>

      {/* CRÉDITO */}
      <TouchableOpacity
        style={[
          styles.opcao,
          formaPagamento === "Crédito" && styles.opcaoSelecionada,
        ]}
        onPress={() => setFormaPagamento("Crédito")}
      >
        <Text style={styles.textoOpcao}>Cartão de Crédito</Text>
      </TouchableOpacity>

      {/* DÉBITO */}
      <TouchableOpacity
        style={[
          styles.opcao,
          formaPagamento === "Débito" && styles.opcaoSelecionada,
        ]}
        onPress={() => setFormaPagamento("Débito")}
      >
        <Text style={styles.textoOpcao}>Cartão de Débito</Text>
      </TouchableOpacity>

      {/* QR CODE PIX */}
      {formaPagamento === "PIX" && (
        <View style={styles.areaPix}>
          <Text style={styles.tituloPix}>Pagamento via PIX</Text>

          <View style={styles.qrCode}>
            <QRCode value="PIX FICTICIO - CEARÁ CALÇADOS" size={180} />
          </View>

          <Text style={styles.textoPix}>
            Escaneie o QR Code para realizar o pagamento
          </Text>
        </View>
      )}

      {/* FORMULÁRIO DO CARTÃO */}
      {(formaPagamento === "Crédito" || formaPagamento === "Débito") && (
        <View style={styles.areaCartao}>
          <Text style={styles.tituloCartao}>Dados do cartão</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome no cartão"
            placeholderTextColor="#888"
          />

          <TextInput
            style={styles.input}
            placeholder="Número do cartão"
            placeholderTextColor="#888"
            keyboardType="numeric"
          />

          <View style={styles.linhaCartao}>
            <TextInput
              style={[styles.input, styles.inputMenor]}
              placeholder="Validade"
              placeholderTextColor="#888"
            />

            <TextInput
              style={[styles.input, styles.inputMenor]}
              placeholder="CVV"
              placeholderTextColor="#888"
              keyboardType="numeric"
              secureTextEntry
            />
          </View>
        </View>
      )}
      {formaPagamento && (
        <TouchableOpacity
          style={styles.botaoFinalizar}
          onPress={() => {
            limparCarrinho();
            navigation.navigate("Success");
          }}
        >
          <Text style={styles.textoFinalizar}>Finalizar pedido</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
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
    marginBottom: 25,
  },

  resumo: {
    backgroundColor: "#282828",
    borderRadius: 15,
    padding: 18,
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },

  texto: {
    fontSize: 15,
    color: "#bbb",
    marginBottom: 5,
  },

  preco: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#B8860B",
    marginTop: 10,
  },

  subtituloPagamento: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 30,
    marginBottom: 15,
  },

  opcao: {
    backgroundColor: "#282828",
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },

  opcaoSelecionada: {
    backgroundColor: "#B8860B",
    borderColor: "#B8860B",
  },

  textoOpcao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  areaPix: {
    alignItems: "center",
    backgroundColor: "#282828",
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
  },

  tituloPix: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },

  qrCode: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
  },

  textoPix: {
    color: "#bbb",
    fontSize: 14,
    textAlign: "center",
    marginTop: 15,
  },

  areaCartao: {
    backgroundColor: "#282828",
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
  },

  tituloCartao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },

  input: {
    backgroundColor: "#181818",
    color: "#fff",
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 15,
    marginBottom: 12,
  },

  linhaCartao: {
    flexDirection: "row",
    gap: 10,
  },

  inputMenor: {
    flex: 1,
  },
  botaoFinalizar: {
    backgroundColor: "#B8860B",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  textoFinalizar: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  conteudo: {
    paddingBottom: 120,
  },
});
