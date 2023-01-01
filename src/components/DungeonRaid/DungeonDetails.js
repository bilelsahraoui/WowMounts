import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import KeyDescription from './KeyDescription';
import axiosClient from '../../config/axiosClient';
import Loading from '../../components/Global/Loading';
import ErrorComponent from '../../components/Global/ErrorComponent';
import DungeonDescription from './DungeonDescription';
import BossDescription from './BossDescription';

const DungeonDetails = ({dungeon, image}) => {
  const [dungeonDetails, setDungeonDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(image);
    axiosClient
      .get(dungeon.dungeon.key.href)
      .then(res => {
        setDungeonDetails(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [dungeon, image]);
  return (
    <Container>
      <ViewContainer>
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorComponent />
        ) : (
          <>
            <DungeonDescription dungeon={dungeonDetails} image={image} />
            <KeyDescription dungeon={dungeon} key={dungeon.id} />
            <BossDescription encounters={dungeonDetails.encounters} />
          </>
        )}
      </ViewContainer>
    </Container>
  );
};

const Container = styled.ScrollView`
  align-self: center;
  height: 100%;
  width: 100%;
`;

const ViewContainer = styled.View`
  align-self: center;
  height: 100%;
  width: 90%;
`;

export default DungeonDetails;
