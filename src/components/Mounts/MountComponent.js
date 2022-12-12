import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Image} from 'react-native';

const MountComponent = ({id}) => {
  const [mount, setMount] = useState({});
  const [creature_display, setCreature_display] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://eu.api.blizzard.com/data/wow/mount/${id}?namespace=static-eu&locale=fr_FR&access_token=EUclt1NLzwNE3NmGlDndFqDTFIsp85g6z6`,
      )
      .then(res => {
        console.log(res);
        setMount(res.data);
        axios
          .get(
            `https://eu.api.blizzard.com/data/wow/media/creature-display/${mount?.creature_displays[0].id}?namespace=static-eu&locale=fr_FR&access_token=EUclt1NLzwNE3NmGlDndFqDTFIsp85g6z6`,
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
  background-color: red;
`;

const Container = styled.View`
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: red;
`;

const StyledText = styled.Text`
  font-size: 15px;
`;

const StyledImage = styled.Image`
  height: 80%;
  width: 40px;
`;

export default MountComponent;
