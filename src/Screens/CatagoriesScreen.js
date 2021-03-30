import React from 'react';
import {CATEGORIES} from '../Data/dummy-data';
import CategoryGridTitle from '../Components/CategoryGridTile';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
const CatagoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTitle
        itemData={itemData.item}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'Meals',
            params: {categoryId: itemData.item.id},
          });
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderGridItem}
    />
  );
};
CatagoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 100,
  },
});
export default CatagoriesScreen;
