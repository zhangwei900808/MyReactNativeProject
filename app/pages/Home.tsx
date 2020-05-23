import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Avatar, Card, ListItem, Button, Icon, Header, SearchBar } from "react-native-elements";
import { connect } from "react-redux";
import { createAction } from "../utils";

import Users from "./Users";
import Movie from "./Movie";
import movieModel from "../models/movieModel";
import qs from "qs";

@connect(({ userModel, movieModel }) => ({ userModel, movieModel }))
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      movies: props.movieModel.movies
    };
  }
  updateSearch = search => {
    const { movieModel } = this.props;
    const searchMovies = movieModel.movies.filter(movie => movie.title.includes(search));
    this.setState({
      movies: searchMovies,
      search
    });
  };
  componentDidMount() {
    this.props.dispatch(createAction("movieModel/setMovies")());
  }

  static getDerivedStateFromProps(props, state) {
    if (props.movieModel.movies && state.search.length === 0) {
      return {
        movies: props.movieModel.movies
      };
    }
    if (state.search.length > 0) {
      return {
        movies: state.movies
      };
    }
    return null;
  }

  render() {
    const { search, movies } = this.state;
    const { navigation, movieModel } = this.props;
    return (
      <View>
        <Header
          placement="left"
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "电影列表", style: { color: "#fff", fontWeight: "bold", fontSize: 16 } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
        <SearchBar placeholder="请输入..." searchIcon clearIcon onChangeText={this.updateSearch} value={search} lightTheme />
        {movies.length > 0 ? <Movie navigation={navigation} movies={movies} /> : <Text style={{ padding: 50 }}>正在加载电影列表</Text>}
      </View>
    );
  }
}
