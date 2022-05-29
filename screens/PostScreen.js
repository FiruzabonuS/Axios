import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View, Text, TouchableOpacity} from 'react-native';

export default function PostScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/').then(res => {
      setData(res.data);
    });
  });
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.textContainer}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: 350,
    height: 70,
    backgroundColor: '#B8F1B0',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
  },
});
