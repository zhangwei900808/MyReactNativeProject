import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View, Image } from "react-native";
import { Avatar, Card, ListItem, Button, Icon, Header } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import store from "./app/models";
import UserDetail from "./app/pages/UserDetail";
import MovieDetail from "./app/pages/MovieDetail";
import Home from "./app/pages/Home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            headerMode="none"
            screenOptions={{
              headerTintColor: "white",
              headerStyle: { backgroundColor: "red" }
            }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: "首页"
              }}
            />
            <Stack.Screen
              name="UserDetail"
              component={UserDetail}
              options={{
                title: "用户详情"
              }}
            />
            <Stack.Screen
              name="MovieDetail"
              component={MovieDetail}
              options={{
                title: "电影详情"
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <UserDetail></UserDetail> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
