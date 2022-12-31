import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import KeyDescription from './KeyDescription';
import axiosClient from '../../config/axiosClient';
import Loading from '../../components/Global/Loading';
import ErrorComponent from '../../components/Global/ErrorComponent';
import DungeonDescription from './DungeonDescription';
import BossDescription from './BossDescription';

const DungeonDetails = ({dungeon}) => {
  const [dungeonDetails, setDungeonDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axiosClient
      .get(dungeon.dungeon.key.href)
      .then(res => {
        setDungeonDetails(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [dungeon]);
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorComponent />
      ) : (
        <>
          <DungeonDescription dungeon={dungeonDetails} />
          <KeyDescription dungeon={dungeon} key={dungeon.id} />
          <BossDescription encounters={dungeonDetails.encounters} />
        </>
      )}
    </Container>
  );
};

const Container = styled.ScrollView`
  align-self: center;
  height: 100%;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default DungeonDetails;
