import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import Loading from '../../components/Global/Loading';
import ProfessionComponent from '../../components/Professions/ProfessionComponent';
import axiosClient from '../../config/axiosClient';
import ErrorComponent from '../../components/Global/ErrorComponent';

const Professions = () => {
  const [professions, setProfessions] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosClient
      .get(
        'https://eu.api.blizzard.com/data/wow/profession/index?namespace=static-eu&locale=fr_FR',
      )
      .then(res => {
        setProfessions(res.data.professions);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorComponent />
      ) : (
        <StyledFlatList
          data={professions}
          renderItem={({item}) => <ProfessionComponent profession={item} />}
          keyExtractor={item => item.id}
        />
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

const StyledFlatList = styled.FlatList`
  height: auto;
  width: 100%;
`;

export default Professions;
