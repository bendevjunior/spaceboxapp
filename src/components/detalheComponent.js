import React from "react";

import { Modal, View, Text, StyleSheet , Image} from "react-native";

const DetalheComponent = props => (
  <Modal
    style={estilo.modal}
    transparent={true}
    visible={props.visivel}
  >
   <View style={estilo.item}>
      <Image style={estilo.imagem} source={{uri: props.foto}}/>
      <View style={estilo.contentTextos}>
        <Text style={estilo.nome}>{props.nome}</Text>
        <Text style={estilo.cargo}>{props.cargo}</Text>
      </View>
    </View>
  </Modal>
);
const estilo = StyleSheet.create({
  modal: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer:{
    backgroundColor: "#FFF"
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
    backgroundColor: "#f0f1ef",
    borderWidth: 1,
    borderColor: "#d9d9d9",
    padding: 20,
  },
});

export default DetalheComponent
