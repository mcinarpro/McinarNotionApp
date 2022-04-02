import React, { useState } from 'react';
import {Button, FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, TouchableOpacityBase, View} from 'react-native';
import {BookList} from '../../data/BookList';
import {Book} from '../../models/Book';

const HomeView = () => {
  const [counter, setCounter] = useState(0);

  const onNext = () => {
    setCounter(prevCounter => prevCounter + 1);
  };
  const onPrevious = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  return (
    <View>
      <Text>Counter's valiue = {counter}</Text>
      <Button title="Next" onPress={onNext} />
      <Button title="Previous" onPress={onPrevious} />
      <FlatList
        data={BookList}
        keyExtractor={item => item.id}
        renderItem={({item}) => <BookInfo {...item} />}
      />
    </View>
  );
};

const BookInfo = ({name, status, image}: Book) => {
  const getBookName = () => {
    console.log("name is ", name)
  }
  return (
    <View>
      <Text>This is a book</Text>
      <Text>
        name : {name}, status: {status}
      </Text>
      <TouchableOpacity onPress={getBookName}>
      <Image source={require("../../assets/images/miracle-morning.jpg")} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 200,
  },
});
