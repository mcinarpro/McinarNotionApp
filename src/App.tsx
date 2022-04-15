import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './views/HomeView/HomeView';
import ItemDetailsView from './views/HomeView/ItemDetailsView';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Details" component={ItemDetailsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
