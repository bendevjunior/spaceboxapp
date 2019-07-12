import React, { Component } from "react";

import { Modal, View, Text, StyleSheet } from "react-native";

export default class DetalheComponent extends Component {
  render() {
    return (
      <Modal animationType="slide" style={estilo.modal} transparent={false} visible={true}>
        <View>
          <View>
            <Text>Hello World!</Text>
          </View>
        </View>
      </Modal>
    );
  }
}
const estilo = StyleSheet.create({
  moda: {
    backgroundColor: "#f0f1ef",
    width: 100,
    height: 100,
    marginTop: 22
  }
});
