import React, {useEffect, useState} from 'react';
import Loading from '../../components/Global/Loading';
import axiosClient from '../../config/axiosClient';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const ProfessionsDetails = ({route}) => {
  const [profession, setProfession] = useState({});
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    axiosClient
      .get(
        `https://eu.api.blizzard.com/data/wow/profession/${route.params.id}?namespace=static-eu&locale=fr_FR&`,
      )
      .then(res => {
        setProfession(res.data);
        navigation.setOptions({title: profession.name});
        setLoading(false);
      });
  });
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>{/* <StyledImage source={{uri: profession}}> */}</>
      )}
    </Container>
  );
};

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const StyledImage = styled.Image`
  height: 30%;
  width: 100px;
  background-color: lightgray;
`;

export default ProfessionsDetails;
