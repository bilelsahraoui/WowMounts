import React, {useEffect, useState} from 'react';
import axiosClient from '../../config/axiosClient';
import styled from 'styled-components/native';
import DungeonComponent from '../../components/DungeonRaid/DungeonComponent';
import Loading from '../../components/Global/Loading';
import ErrorComponent from '../../components/Global/ErrorComponent';

const Dungeons = () => {
  const [dungeons, setDungeons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axiosClient
      .get(
        'https://eu.api.blizzard.com/data/wow/mythic-keystone/dungeon/index?namespace=dynamic-eu&locale=fr_FR',
      )
      .then(res => {
        setDungeons(res.data.dungeons);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <>
      <BackgroundContainer source={require('../../assets/images/donjon.jpg')} />
      <Container>
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorComponent />
        ) : (
          <>
            <StyledFlatList
              data={dungeons}
              renderItem={({item}) => <DungeonComponent dungeon={item} />}
              keyExtractor={item => item.id}
            />
          </>
        )}
      </Container>
    </>
  );
};

const Container = styled.View`
  align-self: center;
  height: 100%;
  width: 90%;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const BackgroundContainer = styled.Image`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  opacity: 0.95;
`;

const StyledFlatList = styled.FlatList`
  height: 100%;
  width: 100%;
`;

export default Dungeons;
