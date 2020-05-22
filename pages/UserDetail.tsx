import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card, ListItem, Button, Icon, Input, PricingCard } from "react-native-elements";

const users = [
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  }
];
export default class UserDetail extends React.Component {
  render() {
    return (
      <Card title="CARD WITH DIVIDER">
        {users.map((u, i) => {
          return (
            <View key={i} style={styles.user}>
              <Image style={styles.image} resizeMode="cover" source={{ uri: u.avatar }} />
              <Text style={styles.name}>{u.name}</Text>
              <Input placeholder="BASIC INPUT" />
            </View>
          );
        })}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  user: {},
  image: {},
  name: {}
});
