import React from "react";
import { connect } from "react-redux";
import { View, Image, StyleSheet, ScrollView, Alert } from "react-native";
import { Avatar, Card, ListItem, Button, Icon, Input, PricingCard, Text } from "react-native-elements";

@connect(({ movieModel }) => ({ movieModel }))
export default class MovieModel extends React.Component<Props> {
  render() {
    const { movieModel, navigation } = this.props;

    return (
      <ScrollView style={styles.container}>
        {movieModel.movie ? (
          <Card title="电影详情" containerStyle={{ padding: 0 }} titleStyle={{ backgroundColor: "#2089dc", color: "#fff", padding: 20 }}>
            <View style={styles.user}>
              <Avatar
                rounded
                source={{
                  uri: movieModel.movie.posters.thumbnail
                }}
                width={200}
                height={200}
                style={styles.image}
              />
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
  container: {
    paddingTop: 30
  },
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
    paddingTop: 20
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
