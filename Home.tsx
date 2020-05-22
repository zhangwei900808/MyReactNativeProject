import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Avatar, Card, ListItem, Button, Icon, Header } from "react-native-elements";
import Users from "./pages/Users";

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
      const {navigation} = this.props;
    return (
      <View>
        <Header placement="left"
         leftComponent={{ icon: "menu", color: "#fff" }} 
         centerComponent={{ text: "我的好友", style: { color: "#fff" } }}
         rightComponent={{ icon: "home", color: "#fff" }} />
        <Users navigation={navigation}></Users>
      </View>
    );
  }
}
