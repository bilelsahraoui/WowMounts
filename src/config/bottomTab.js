import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import styled from 'styled-components/native';
import Home from '../screens/Home';
import Mounts from '../screens/Mounts';
import Professions from '../screens/Professions';
import OtherStack from './otherStack';

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Accueil',
            tabBarIcon: () => {
              return (
                <StyledIcon source={require('../assets/icons/HouseIcon.png')} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Mounts"
          component={Mounts}
          options={{
            title: 'Montures',
            tabBarIcon: () => {
              return (
                <StyledIcon source={require('../assets/icons/HorseIcon.png')} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Professions"
          component={Professions}
          options={{
            title: 'Métiers',
            tabBarIcon: () => {
              return (
                <StyledIcon source={require('../assets/icons/ProfIcon.png')} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Other"
          component={OtherStack}
          options={{
            title: 'Autres',
            tabBarIcon: () => {
              return (
                <StyledIcon source={require('../assets/icons/DotsIcon.png')} />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const StyledIcon = styled.Image`
  width: 40px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;

export default Tabs;
