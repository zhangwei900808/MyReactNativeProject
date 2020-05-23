import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, ScrollView, Alert, ActivityIndicator } from "react-native";
import { Image, Avatar, Card, ListItem, Button, Icon, Input, PricingCard, Text, Header } from "react-native-elements";

@connect(({ movieModel }) => ({ movieModel }))
export default class MovieModel extends React.Component<Props> {
  render() {
    const { movieModel, navigation } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Header
          placement="left"
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "电影详情", style: { color: "#fff", fontWeight: "bold", fontSize: 16 } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
        {movieModel.movie ? (
          <Card containerStyle={{ padding: 0 }} titleStyle={{ backgroundColor: "#2089dc", color: "#fff", padding: 20 }}>
            <View style={styles.user}>
              <Image source={{ uri: movieModel.movie.posters.thumbnail }} style={styles.image} PlaceholderContent={<ActivityIndicator />} />
              <Text h4 style={styles.title}>
                {movieModel.movie.title}
              </Text>
              <Text h4 style={styles.txt}>
                ({movieModel.movie.year.toString()})
              </Text>
              <Button
                title="点击返回"
                style={styles.btn}
                onPress={() => {
                  navigation.navigate("Home");
                }}
              />
            </View>
          </Card>
        ) : null}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  btn: {
    paddingTop: 20,
    paddingBottom: 20,
    width: 200
  },
  user: {
    flex: 1,
    alignItems: "center"
  },
  image: {
    marginTop: 30,
    borderRadius: 100,
    width: 200,
    height: 200
  },
  name: {},
  title: {
    paddingTop: 20,
    paddingBottom: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#2089dc",
    fontWeight: "bold"
  },
  txt: {}
});

interface Props {
  navigation: any;
  user: any;
}
