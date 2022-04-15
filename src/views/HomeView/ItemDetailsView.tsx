import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Client} from '@notionhq/client';
import {notionConfig} from '../../config/notion';
import {InventoryItem} from '../../models/InventoryItem';

const notion = new Client({auth: notionConfig.NOTION_KEY});
const databaseId = notionConfig.NOTION_DATABASE_ID;

const ItemDetailsView = (props: any) => {
  const {id, name} = props.route.params;

  return (
    <View>
      <Text>Detail view of an item : {name}</Text>
    </View>
  );
};

export default ItemDetailsView;

const styles = StyleSheet.create({});
