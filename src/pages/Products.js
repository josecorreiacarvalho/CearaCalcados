import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const produtos = [
  {
    id: 1,
    marca: "Olympikus",
    modelo: "Tênis Masculino",
    preco: "R$ 299,90",
    imagem: require("../images/olympikus1.png"),
    descricao:
      "Tênis masculino Olympikus desenvolvido para oferecer conforto, leveza e praticidade no dia a dia. " +
      "Possui design moderno e versátil, combinando facilmente com diferentes estilos. " +
      "Ideal para caminhadas, passeios e para quem busca conforto durante longos períodos de uso.",
  },
  {
    id: 2,
    marca: "Beira Rio",
    modelo: "Tênis Feminino",
    preco: "R$ 149,90",
    imagem: require("../images/beirario1.png"),
    descricao:
      "Tênis feminino Beira Rio é um modelo com estilo casual esportivo e moderno, ideal para te acompanhar em seu dia à dia. " +
      "Seu cadedal é fabricado em material sintético e ajuste por cadarços de amarrar.",
  },
  {
    id: 3,
    marca: "Vizzano",
    modelo: " Chinelo Vizzano",
    preco: "R$ 94,50",
    imagem: require("../images/vizzano3.png"),
    descricao:
      "É escolha certa para mulheres que valoriza conforto com atitude." +
      "Com design moderno e robusto, o modelo traz tiras largas e cruzadas e o nome VIZZANO em destaque com letras metálicas douradas," +
      "criando um visual urbano, descolado e cheio de personalidade.",
  },
  {
    id: 4,
    marca: "Beira Rio",
    modelo: "Sandália Feminina",
    preco: "R$ 96,80",
    imagem: require("../images/beirario2.png"),
    descricao:
      "Se você procura uma sandália que une elegância discreta de um design atemporal com conforto máximo para a sua rotina" +
      "encontrou o modelo perfeito.",
  },
  {
    id: 5,
    marca: "Beira Rio",
    modelo: "Sandália Feminina",
    preco: "R$ 54,80",
    imagem: require("../images/beirario7.png"),
    descricao:
      "A sandália feminina Beira Rio é ideal para quern busca um visual elegante e marcante, sem abrir mao do conforto, " +
      "com design delicado e acabamento versátil, o modelo se destaca pelo detalhe frontal corn aplicações de esferas douradas, " +
      "que trazem um toque sofisticado e valorizam anda mais o calçado.",
  },
  {
    id: 6,
    marca: "Olympikus",
    modelo: "Tênis Masculino",
    preco: "R$ 399,90",
    imagem: require("../images/olympikus3.png"),
    descricao:
      "Desepenho e conforto para corredores exigentes. Com design unissex e tecnologia avançada," +
      "este tênis oferece amortecimento Eleva Pro 2.0, proporcionando leveza e respostas rápidas a cada passada.",
  },
  {
    id: 7,
    marca: "Beira Rio",
    modelo: "Tênis Feminino",
    preco: "R$ 120,90",
    imagem: require("../images/beirario6.png"),
    descricao:
      "O Tênis Beira Rio tendência Samba foi feito para acompanhar sua rotina. " +
      "Leve, macio e com design moderno, oferece conforto real para uso prolongado sem abrir mão do estilo",
  },
  {
    id: 8,
    marca: "Olympikus",
    modelo: "Chinelo Unissex",
    preco: "R$ 129,90",
    imagem: require("../images/olympikus4.png"),
    descricao:
      "O Chinelo Olimpikus MELBOURNE, ideal para seus pés descansarem depois do treino, ganha sua segunda edição. " +
      "Cabedal composto por laminado e tecido macio, que proporciona máxima praticidade ao calçar.",
  },
  {
    id: 9,
    marca: "Vizzano",
    modelo: "Sandália Feminina",
    preco: "R$ 179,90",
    imagem: require("../images/vizzano1.png"),
    descricao:
      "É aescolha idealpara mulheres que desjam unir elegância, brilho e sotisficação em ocacoões especiais. " +
      "Com design moderno e acacbamento refinado, o modelo valoriza a silhueda e adiciona glamour na medida" +
      "certa a produções par festas, eventos e celebrações.",
  },
  {
    id: 10,
    marca: "Olimpikus",
    modelo: " Chinelo Olympikus",
    preco: "R$ 199,90",
    imagem: require("../images/olympikus5.png"),
    descricao:
      "É ideal para os momentos de descanso após treinos ou para a correria do dia a dia, oferecendo ainda mais conforto" +
      "e recuperação para os pés.",
  },
  {
    id: 11,
    marca: "Beira Rio",
    modelo: "Sandália Feminina",
    preco: "R$ 82,90",
    imagem: require("../images/beirario3.png"),
    descricao:
      "A Sandália Beira Rio Rasteira Feminina Ring Toe possui cabedal em napa, macio e confortável. Ideal para o dia a dia, " +
      "A palmilha é anatómica, proporcionando conforto prolongado aos pés." +
      "O solado é feito de borracha flexível, oferecendo maior segurança e aderência.",
  },
  {
    id: 12,
    marca: "Vizzano",
    modelo: "Sandália Feminina",
    preco: "R$ 129,90",
    imagem: require("../images/vizzano2.png"),
    descricao:
      "Sandalia Rasteira Feminina Vizzano, perfeita para quem busca conforto e estilo na moda casual. " +
      "Com design moderno em acabamento metalizado, " +
      "essa sandália une leveza e maciez, proporcionando uma sensacao unica de bem-estar ao longo do dia.",
  },
  {
    id: 13,
    marca: "Beira Rio",
    modelo: "Chinelo Feminino",
    preco: "R$ 64,20",
    imagem: require("../images/beirario4.png"),
    descricao:
      "O Tamanco Feminino Beira Rio Plataforma Original é a escolha ideal para mulheres modernas que buscam um calçado sofisticado, " +
      "versátil e extremamente confortável para a rotina ou momentos de lazer. Produzido pela conceituada marca brasileira," +
      "ele reune materiais de alta qualidade e tecnologias focadas no bem-estar dos pés.",
  },
  {
    id: 14,
    marca: "Olympikus",
    modelo: "Meias Unissex",
    preco: "R$ 64,20",
    imagem: require("../images/meias.png"),
    descricao:
      "A Meia Olympikus Cano invisível pacote com 6 pares masculino é ideal para praticas esportivas e dia a dia. " +
      "75% Algodão, 22% Poliéster, 2% Elastano e 1% Elastodieno.",
  },
  {
    id: 15,
    marca: "Beira rio",
    modelo: "Tênis Feminino",
    preco: "R$ 159,90",
    imagem: require("../images/beirario5.png"),
    descricao:
      "Com urn visual clean e detalhes sutis, o tênis Beira Rio se adapta facilmente a diferentes estilos e combinções de roupas. " +
      "Seja corn jeans, vestidos ou peças mais esportivas, ele acrescenta um toque de elegância e descontração ao look. ",
  },
  {
    id: 16,
    marca: "Olympikus",
    modelo: "Chinelo Masculino",
    preco: "R$ 86,90",
    imagem: require("../images/olynpikus6.png"),
    descricao:
      "Tem a combinação perfeita em sua confecção, com material leve, macio e flexível, proporciona sensação de supremo relaxamento, " +
      "combatendo corn eficácia comprovada o stress e as dores comuns causadas pelo use constante de calçados diversos. " +
      "Seu solado robusto garante major aderencia e estabilidade durance o caminhar, alem de durabilidade incomparavel.",
  },
  {
    id: 17,
    marca: "Olympikus",
    modelo: "Chinelo Unissex",
    preco: "R$ 64,20",
    imagem: require("../images/olympikus2.png"),
    descricao:
      "Ideal para quem busca conforto nas 24hr do dia. O modelo estilo slip-on oferece um maior amortecimento" +
      "proporcionando a sensação de leveza e permitindo a secagen rápida do chinelo.",
  },
  {
    id: 18,
    marca: "Vizzano",
    modelo: "Chinelo Feminino",
    preco: "R$ 52,20",
    imagem: require("../images/vizzano4.png"),
    descricao:
      "O chinelo Vizzano é a escolha ideal para quern busca praticidade e leveza sem abrir maior do estilo. " +
      "Confeccionado em borracha de alta qualidade, este modelo oferece palmilha macia que garante conforto a cada passo. " +
      "Com solado antiderrapante, proporciona seguranca no caminhar em diferentes superficies, " +
      "sendo perfeito para use diário, em casa ou em passeios ao ar livre.",
  },

  {
    id: 19,
    marca: "Olympikus",
    modelo: "Tênis feminino",
    preco: "R$ 219,90",
    imagem: require("../images/olympikus7.png"),
    descricao:
      "O Tênis Olympikus Acqua traz um toque moderno para o seu dia a dia. " +
      "Seu solado é desenvolvido em tecnologia Eleva+ que proporciona conforto, amortecimento e urn efeito trampolim. " +
      "Já o cabedal é confeccionado em tecido jacquard multicolor em padrrão geométrico que transmite resistência e leveza.",
  },
  {
    id: 17,
    marca: "Beira Rio",
    modelo: "Chinelo Masculino",
    preco: "R$ 67,20",
    imagem: require("../images/beirario8.png"),
    descricao:
      "Chinelo de Dedo Ortopedico Masculino BRsport: Conforto e alívio para pés sensíveis, " +
      "se você está procurando um chinelo de dedo ortopédico masculino que combine conforto e funcionalidade, " +
      "o BRsport é a escolha ideal. Este chinelo foi especialmente projetado para oferecer alta absorção de Impacto em cada passo.",
  },
];

export default function Products({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botaoHome}
        onPress={() => navigation.navigate("Home")}
      >
        <FontAwesome name="home" size={26} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.titulo}>Nossos Produtos</Text>

      <FlatList
        data={produtos}
        numColumns={2}
        columnWrapperStyle={styles.linha}
        contentContainerStyle={styles.lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("ProductDetails", {
                produto: item,
              })
            }
          >
            <Image
              source={item.imagem}
              style={styles.imagem}
              resizeMode="contain"
            />

            <Text style={styles.marca}>{item.marca}</Text>
            <Text style={styles.modelo}>{item.modelo}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
    padding: 16,
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

  lista: {
    paddingBottom: 20,
  },

  linha: {
    gap: 12,
    marginBottom: 12,
  },

  card: {
    flex: 1,
    backgroundColor: "#282828",
    borderRadius: 15,
    padding: 10,
  },

  imagem: {
    width: "100%",
    height: 140,
    borderRadius: 10,
    overflow: "hidden",
  },

  marca: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 8,
  },

  modelo: {
    fontSize: 14,
    color: "#bbb",
    marginTop: 2,
  },

  preco: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#B8860B",
    marginTop: 8,
  },
});
