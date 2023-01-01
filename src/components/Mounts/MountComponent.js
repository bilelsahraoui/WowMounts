import React, {useEffect, useState} from 'react';
import axiosClient from '../../config/axiosClient';
import styled from 'styled-components';
import Loading from '../Global/Loading';

const MountComponent = ({id}) => {
  const [mount, setMount] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosClient
      .get(
        `https://eu.api.blizzard.com/data/wow/mount/${id}?namespace=static-eu&locale=fr_FR`,
      )
      .then(res => {
        setMount(res.data);
        setLoading(false);
      });
  });

  return loading ? (
    <Loading />
  ) : (
    <ContainerOpacity>
      <StyledText>{mount?.name}</StyledText>
      <StyledImage
        source={{
          uri: mount.creature_displays
            ? `https://render.worldofwarcraft.com/eu/npcs/zoom/creature-display-${mount.creature_displays[0].id}.jpg`
            : null,
        }}
      />
    </ContainerOpacity>
  );
};

const ContainerOpacity = styled.TouchableOpacity`
  align-self: center;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledText = styled.Text`
  font-size: 15px;
`;

const StyledImage = styled.Image`
  height: 80%;
  width: 100px;
  border-radius: 10px;
`;

export default MountComponent;
