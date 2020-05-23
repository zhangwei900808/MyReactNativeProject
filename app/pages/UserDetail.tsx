import React from "react";
import { connect } from "react-redux";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { Avatar, Card, ListItem, Button, Icon, Input, PricingCard, Text } from "react-native-elements";

@connect(({ userModel }) => ({ userModel }))
export default class UserDetail extends React.Component<Props> {
  render() {
    const { userModel } = this.props;
    console.log("userModel.user.avatar_url = ", userModel.user);

    return (
      <ScrollView style={styles.container}>
        {userModel.user ? (
          <Card title="用户详情">
            <View style={styles.user}>
              <Avatar
                rounded
                source={{
                  uri: userModel.user.avatar_url
                }}
                width={200}
                height={200}
              />
              <Text h1>{userModel.user.name}</Text>
              <Text h5>{userModel.user.subtitle}</Text>
            </View>
          </Card>
        ) : null}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100
  },
  user: {
    flex: 1,
    alignItems: "center"
  },
  image: {},
  name: {}
});

interface Props {
  navigation: any;
  user: any;
}
