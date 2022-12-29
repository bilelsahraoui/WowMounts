import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from '../screens/Professions/Details';
import Professions from '../screens/Professions';

const ProfessionsStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Navigator initialRouteName="/professions">
        <Stack.Screen
          name="/professions"
          component={Professions}
          options={{title: 'Métiers'}}
        />
        <Stack.Screen
          name="/professions/details"
          component={Details}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </>
  );
};

export default ProfessionsStack;
