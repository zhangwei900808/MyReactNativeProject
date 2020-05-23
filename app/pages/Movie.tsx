import React from "react";
import { connect } from "react-redux";
import { createAction } from "../utils";

import { StyleSheet, Text, View, Image, ScrollView, Alert } from "react-native";
import { Avatar, Card, ListItem, Button, Icon, Header } from "react-native-elements";

@connect(({ movieModel }) => ({ movieModel }))
export default class Movie extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(createAction("movieModel/setMovies")());
  }
  render() {
    const { navigation, movieModel } = this.props;

    return (
      <ScrollView>
        {movieModel.movies &&
          movieModel.movies.map((movie, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: movie.posters.thumbnail }, size: "medium" }}
              title={movie.title.substr(0, 30)}
              titleStyle={{ fontSize: 18, fontWeight: "bold", color: "#2089dc", overflow: "hidden" }}
              subtitle={movie.year.toString()}
              subtitleStyle={{ fontSize: 14, color: "#999" }}
              bottomDivider
              chevron
              onPress={() => {
                this.props.dispatch(createAction("movieModel/setMovie")({ movie }));
                navigation.navigate("MovieDetail");
              }}
            />
          ))}
      </ScrollView>
    );
  }
}
