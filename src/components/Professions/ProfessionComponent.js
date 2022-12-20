import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import axiosClient from '../../config/axiosClient';

const ProfessionComponent = ({profession}) => {
  const [theProfession, setTheProfession] = useState({});
  const [professionImage, setProfessionImage] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    axiosClient
      .get(
        `https://eu.api.blizzard.com/data/wow/profession/${profession?.id}?namespace=static-eu&locale=fr_FR`,
      )
      .then(res => {
        setTheProfession(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    axiosClient
      .get(
        `https://eu.api.blizzard.com/data/wow/media/profession/${profession?.id}?namespace=static-eu&locale=fr_FR`,
      )
      .then(res => setProfessionImage(res.data.assets[0].value));
  }, [profession?.id]);
  return (
    <ContainerOpacity
      onPress={() =>
        navigation.navigate('/professions/details', {id: profession.id})
      }>
      <Container>
        <Title>{theProfession.name}</Title>
        <StyledImage source={{uri: professionImage ? professionImage : null}} />
      </Container>
    </ContainerOpacity>
  );
};

const Container = styled.View`
  height: 100%;
  width: 100%;
  margin-top: 10px;
  padding-bottom: 20px;
  align-items: center;
`;

const ContainerOpacity = styled.TouchableOpacity`
  height: 140px;
  width: 100%;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const StyledImage = styled.Image`
  height: 80%;
  width: 150px;
  border-radius: 10px;
  background-color: lightgray;
`;

export default ProfessionComponent;
