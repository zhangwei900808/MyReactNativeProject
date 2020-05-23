import React from "react";
import { connect } from "react-redux";
import { createAction } from "../utils";

import { StyleSheet, Text, View, Image, ScrollView, Alert } from "react-native";
import { Avatar, Card, ListItem, Button, Icon, Header } from "react-native-elements";

@connect(({ userModel }) => ({ userModel }))
export default class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(createAction("userModel/setUsers")());
  }
  render() {
    const { navigation, userModel } = this.props;
    return (
      <ScrollView>
        {userModel.users &&
          userModel.users.map((user, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: user.avatar_url } }}
              title={user.name}
              subtitle={user.subtitle}
              bottomDivider
              chevron
              onPress={() => {
                this.props.dispatch(createAction("userModel/setUser")({ user }));
                navigation.navigate("UserDetail");
              }}
            />
          ))}
      </ScrollView>
    );
  }
}
