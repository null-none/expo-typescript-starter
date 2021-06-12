import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { HomeScreen } from "./HomeScreen";

const Stack = createStackNavigator();

export const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home" }}
           />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
