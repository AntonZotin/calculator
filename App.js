import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View } from 'react-native';
import { styles } from "./constants/styles";

import BottomTabNavigator from './navigation/BottomTabNavigator';

const Stack = createStackNavigator();

export default function App(props) {
  return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
}
