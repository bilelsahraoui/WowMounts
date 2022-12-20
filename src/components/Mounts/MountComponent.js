import React, {useEffect, useState} from 'react';
import axiosClient from '../../config/axiosClient';
import styled from 'styled-components';

const MountComponent = ({id}) => {
  const [mount, setMount] = useState({});
  const [creature_display, setCreature_display] = useState({});
  useEffect(() => {
    axiosClient
      .get(
        `https://eu.api.blizzard.com/data/wow/mount/${id}?namespace=static-eu&locale=fr_FR`,
      )
      .then(res => {
        console.log(res);
        setMount(res.data);
        axiosClient
          .get(
            `https://eu.api.blizzard.com/data/wow/media/creature-display/${mount?.creature_displays[0].id}?namespace=static-eu&locale=fr_FR`,
          )
          .then(display => {
            setCreature_display(display.data.assets[0]);
          });
      });
  });

  return (
    <ContainerOpacity>
      <Container>
        <StyledText>{mount.name}</StyledText>
        <StyledImage
          source={{uri: creature_display ? creature_display.value : ''}}
        />
      </Container>
    </ContainerOpacity>
  );
};

const ContainerOpacity = styled.TouchableOpacity`
  align-self: center;
  height: 120px;
  width: 100%;
`;

const Container = styled.View`
  align-items: center;
  height: 100%;
  width: 100%;
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
