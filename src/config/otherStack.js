import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Other from '../screens/Other';
import Token from '../screens/Token';
import DungeonRaid from '../screens/DungeonRaid';
import Character from '../screens/Character';

const OtherStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Navigator initialRouteName="/other">
        <Stack.Screen
          name="/other"
          component={Other}
          options={{title: 'Autres catégories'}}
        />
        <Stack.Screen
          name="/token"
          component={Token}
          options={{title: 'Cours du jeton'}}
        />
        <Stack.Screen
          name="/dungeonAndRaid"
          component={DungeonRaid}
          options={{title: 'Donjons et raids'}}
        />
        <Stack.Screen
          name="/character"
          component={Character}
          options={{title: 'Personnage'}}
        />
      </Stack.Navigator>
    </>
  );
};

export default OtherStack;
