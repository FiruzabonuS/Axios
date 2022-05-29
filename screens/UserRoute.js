import React from 'react';
import {View, Text} from 'react-native';

export default function UserRoute({route}) {
  const {texts} = route.params;
  return (
    <View>
      <Text>texts:{texts}</Text>
    </View>
  );
}

// const styles = StyleSheet.create({});
