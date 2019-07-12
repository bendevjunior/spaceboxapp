import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableHighlight
} from "react-native";

import data from "../service/api";

import DetalheComponent from "../components/detalheComponent";

export default class Main extends Component {
  static navigationOptions = {
    title: "Space Box"
  };

  state = {
    visivel: false,
    nome: "",
    cargo: "",
    foto: ""
  };

  modal_show = (item) => {
    this.setState(state => ({
      visivel: !state.visivel
    }));
  };

  item_list = (
    { item } // item da lista
  ) => (
    <TouchableHighlight onPress={this.modal_show}>
      <View style={estilo.item}>
        <Image style={estilo.imagem} source={{ uri: item.foto }} />
        <View style={estilo.contentTextos}>
          <Text style={estilo.nome}>{item.nome}</Text>
          <Text style={estilo.cargo}>{item.cargo}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View style={estilo.container}>
        <DetalheComponent 
        visivel={this.state.visivel} 
        nome={this.state.nome}
        cargo={this.state.cargo} />
        <FlatList
          contentContainerStyle={estilo.lista}
          data={data}
          renderItem={this.item_list}
          keyExtractor={item => item.nome}
        />
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    backgroundColor: "#d9d9d9",
    flex: 1
  },
  imagem: {
    width: 70,
    marginRight: 10,
    height: 70,
    borderRadius: 50
  },
  nome: {
    color: "#092432",
    fontSize: 18,
    fontWeight: "bold"
  },
  cargo: {
    color: "#b1b2b0",
    fontSize: 14
  },
  contentTextos: {},
  item: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f0f1ef",
    borderWidth: 1,
    borderColor: "#d9d9d9",
    padding: 20,
    marginBottom: 20
  },
  lista: {
    padding: 15
  }
});
