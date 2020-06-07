import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
export default class Thanks extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            width,
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Image
            source={require("../assets/logo.png")}
            style={{ resizeMode: "contain", marginTop: 30 }}
          />
        </View>
        <View style={{ padding: 20 }}>
          <Text> Thanks For going paperless </Text>
          <Image
            source={{ uri: this.props.route.params.signature }}
            style={{ width: width - 40, height: 400, resizeMode: "center" }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
