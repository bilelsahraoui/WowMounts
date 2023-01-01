import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import axiosClient from '../../config/axiosClient';

const DungeonComponent = ({dungeon}) => {
  const navigation = useNavigation();
  const [image, setImage] = useState('');

  useEffect(() => {
    axiosClient
      .get(
        `https://eu.api.blizzard.com/data/wow/mythic-keystone/dungeon/${dungeon.id}?namespace=dynamic-eu&locale=fr_FR`,
      )
      .then(res => {
        setImage(
          `https://render.worldofwarcraft.com/eu/zones/${res.data.zone.slug}-large.jpg`,
        );
      });
  });

  return (
    <DungeonTouch
      onPress={() =>
        navigation.navigate('/dungeonAndRaid/dungeonDetails', {
          id: dungeon.id,
          image: image,
        })
      }>
      <BackgroundContainer
        source={{
          uri: image ? image : null,
        }}
      />
      <DungeonTitle>{dungeon.name}</DungeonTitle>
    </DungeonTouch>
  );
};

const BackgroundContainer = styled.Image`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  border-radius: 10px;
`;

const DungeonTouch = styled.TouchableOpacity`
  height: 180px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
  border-width: 0.7px;
`;

const DungeonTitle = styled.Text`
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 2px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 10px;
`;

export default DungeonComponent;
