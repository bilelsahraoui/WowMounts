import React from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import notifee from '@notifee/react-native';
import TokenIcon from '../../assets/icons/TokenIcon.png';

const Other = () => {
  const navigation = useNavigation();

  async function displayTokenNotification() {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'WowMounts',
    });

    await notifee.displayNotification({
      title: "Dernier coup d'oeil sur le jeton",
      body: `Aujourd'hui à ${new Date().toLocaleTimeString('fr-FR')}`,
      android: {
        channelId: 'default',
        largeIcon: TokenIcon,
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  return (
    <Container>
      <Categorie
        onPress={() => {
          navigation.navigate('/token');
          displayTokenNotification();
        }}>
        <BackgroundContainer
          source={require('../../assets/images/token.png')}
        />
        <CategorieTitle>Cours du Jeton</CategorieTitle>
      </Categorie>
      <Categorie onPress={() => navigation.navigate('/dungeonAndRaid')}>
        <BackgroundContainer
          source={require('../../assets/images/donjon.jpg')}
        />
        <CategorieTitle>Donjons Mythiques</CategorieTitle>
      </Categorie>
      <Categorie onPress={() => navigation.navigate('/character')}>
        <BackgroundContainer
          source={require('../../assets/images/character.jpg')}
        />
        <CategorieTitle>Personnage</CategorieTitle>
      </Categorie>
    </Container>
  );
};

const Container = styled.View`
  align-self: center;
  height: 100%;
  width: 90%;
  padding-top: 20px;
`;

const BackgroundContainer = styled.Image`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  border-radius: 10px;
`;

const Categorie = styled.TouchableOpacity`
  height: 30%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
`;

const CategorieTitle = styled.Text`
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 2px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 10px;
`;

export default Other;
