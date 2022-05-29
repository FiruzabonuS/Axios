import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StyleSheet} from 'react-native';
import TabNavigation from './TabNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostRoute from './screens/PostRoute';
import UserRoute from './screens/UserRoute';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen name="PostRoute" component={PostRoute} />
        <Stack.Screen name="UserRoute" component={UserRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({});
