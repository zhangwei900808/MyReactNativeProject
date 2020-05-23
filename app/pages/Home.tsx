import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Avatar, Card, ListItem, Button, Icon, Header } from "react-native-elements";
import { connect } from "react-redux";
import { createAction } from "../utils";

import Users from "./Users";
import Movie from "./Movie";

@connect(({ userModel }) => ({ userModel }))
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Header
          placement="left"
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "电影列表", style: { color: "#fff", fontWeight: "bold", fontSize: 16 } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
        <Movie navigation={navigation} />
      </View>
    );
  }
}
