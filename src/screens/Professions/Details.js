import React, {useEffect, useState} from 'react';
import Loading from '../../components/Global/Loading';
import axiosClient from '../../config/axiosClient';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import DetailsProfession from '../../components/Professions/DetailsProfession';

const ProfessionsDetails = ({route}) => {
  const [profession, setProfession] = useState({});
  const [professionImage, setProfessionImage] = useState('');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    axiosClient
      .get(
        `https://eu.api.blizzard.com/data/wow/profession/${route.params.id}?namespace=static-eu&locale=fr_FR&`,
      )
      .then(res => {
        console.log(res);
        setProfession(res.data);
        navigation.setOptions({title: profession.name});
        setLoading(false);
      });
    axiosClient
      .get(
        `https://eu.api.blizzard.com/data/wow/media/profession/${route.params.id}?namespace=static-eu&locale=fr_FR`,
      )
      .then(res => setProfessionImage(res.data.assets[0].value));
  }, [profession.name, route.params.id, navigation]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <DetailsProfession
            profession={profession}
            professionImage={professionImage}
          />
        </>
      )}
    </Container>
  );
};

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

export default ProfessionsDetails;
