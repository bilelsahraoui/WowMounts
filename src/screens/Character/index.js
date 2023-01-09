import React, {useState} from 'react';
import {Linking} from 'react-native';
import styled from 'styled-components/native';

const Character = () => {
  const [realm, setRealm] = useState('');
  const [pseudo, setPseudo] = useState('');
  const searchCharacter = async () => {
    const url = `https://worldofwarcraft.com/fr-fr/character/eu/${realm}/${pseudo}`;
    await Linking.openURL(url);
  };

  return (
    <Container>
      <RoyaumeContainer>
        <StyledTitle>Royaume</StyledTitle>
        <StyledInput onChangeText={text => setRealm(text)} />
      </RoyaumeContainer>
      <CharacterContainer>
        <StyledTitle>Nom du personnage</StyledTitle>
        <StyledInput onChangeText={text => setPseudo(text)} />
      </CharacterContainer>
      <FindMyCharacter onPress={searchCharacter}>
        <FindText>Trouver le personnage</FindText>
      </FindMyCharacter>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: lightgray;
`;

const RoyaumeContainer = styled.View`
  align-items: center;
  width: 100%;
`;

const CharacterContainer = styled.View`
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.TextInput`
  width: 60%;
  background-color: white;
  border-radius: 8px;
  margin-top: 16px;
  padding-left: 6px;
  padding-right: 6px;
`;

const StyledTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

const FindMyCharacter = styled.TouchableOpacity`
  border-radius: 8px;
  background-color: blue;
`;

const FindText = styled.Text`
  font-size: 18px;
  margin: 8px;
  margin-left: 12px;
  margin-right: 12px;
  color: white;
`;

export default Character;
