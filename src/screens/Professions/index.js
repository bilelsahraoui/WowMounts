import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import Loading from '../../components/Global/Loading';
import ProfessionComponent from '../../components/Professions/ProfessionComponent';
import axiosClient from '../../config/axiosClient';

const Professions = () => {
  const [professions, setProfessions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosClient
      .get(
        'https://eu.api.blizzard.com/data/wow/profession/index?namespace=static-eu&locale=fr_FR',
      )
      .then(res => {
        setProfessions(res.data.professions);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <FlatList
            data={professions}
            renderItem={({item}) => <ProfessionComponent profession={item} />}
            keyExtractor={item => item.id}
          />
        </>
      )}
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

export default Professions;
