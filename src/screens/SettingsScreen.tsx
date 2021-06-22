import { StackNavigationProp } from "@react-navigation/stack";
import React, { Component } from "react";
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Text } from 'native-base';

type SettingsStackParametersList = {
};

interface Props {
  navigation: StackNavigationProp<SettingsStackParametersList>;
}

export class SettingsScreen extends Component<Props> {
  public render() {
    // const navigate = this.props.navigation.navigate;

    return (
      <NativeBaseProvider>
        <View style={styles.container}>
          <Text>Settings</Text>
        </View>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});