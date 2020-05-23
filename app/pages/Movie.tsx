import React from "react";
import { connect } from "react-redux";
import { createAction } from "../utils";

import { StyleSheet, Text, View, Image, ScrollView, Alert, RefreshControl } from "react-native";
import { Avatar, Card, ListItem, Button, Icon, Header } from "react-native-elements";

@connect(({ movieModel }) => ({ movieModel }))
export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  _onRefresh = () => {
    //下拉刷新的代码
    Alert.alert("refresh");
  };
  render() {
    const { navigation, movies } = this.props;

    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            title={"正在加载"}
            refreshing={this.state.refreshing}
            colors={["rgb(255, 176, 0)", "#ffb100"]}
            onRefresh={() => {
              this._onRefresh();
            }}
          />
        }
      >
        {movies &&
          movies.map((movie, i) => (
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
