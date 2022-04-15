import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BookList} from '../../data/BookList';
import {Book} from '../../models/Book';
import {Client} from '@notionhq/client';
import {notionConfig} from '../../config/notion';
import {InventoryItem} from '../../models/InventoryItem';

const notion = new Client({auth: notionConfig.NOTION_KEY});
const databaseId = notionConfig.NOTION_DATABASE_ID;

const HomeView = (props: any) => {
  console.log({props});
  const [inventoryList, setInventoryList] = useState<InventoryItem[]>([]);

  const onViewItemDetails = (id: string, name: string) => {
    props.navigation.navigate('Details', {id, name});
  };

  useEffect(() => {
    fetchData()
      .then(result => {
        setInventoryList(
          result.results.map(r => ({
            id: r.id,
            name: r.properties.Name.title[0].plain_text,
            room: r.properties.Room.select.name,
          })),
        );
      })
      .catch(err => console.error({err}));
  }, []);

  const fetchData = async () => {
    console.log({databaseId});
    return await notion.databases.query({database_id: databaseId});
  };

  const InventoryInfo = ({id, name, room}: InventoryItem) => {
    return (
      <View>
        <TouchableOpacity onPress={() => onViewItemDetails(id, name)}>
          <Text style={styles.title}>{name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.appTitle}>Inventory App</Text>
      <FlatList
        data={inventoryList}
        keyExtractor={item => item.id}
        renderItem={({item}) => <InventoryInfo {...item} />}
      />
    </View>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  appTitle: {
    fontSize: 34,
    backgroundColor: 'yellow',
    color: 'blue',
  },
  title: {
    fontSize: 26,
  },
  image: {
    width: 100,
    height: 200,
  },

  btnParentSection: {
    alignItems: 'center',
    marginTop: 10,
  },

  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },

  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
