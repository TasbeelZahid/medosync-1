import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
export default class Thanks extends Component {
  componentDidMount() {
    this.props.navigation.reset({
      index: 0,
      routes: [{ name: "Thanks" }],
    });
  }
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Text> Thanks For going paperless </Text>
        <Image
          source={{ uri: this.props.route.params.signature }}
          style={{ width: width - 20, height: 400, resizeMode: "center" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
