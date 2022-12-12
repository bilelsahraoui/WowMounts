import React from 'react';
import {SafeAreaView, Dimensions, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import styled from 'styled-components/native';
import {useState} from 'react';

const Home = () => {
  const [open, setOpen] = useState(true);

  return (
    <SafeAreaView>
      <Video
        source={require('../../assets/videos/wow.mp4')}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
        style={styles.backgroundVideo}
      />
      {open ? (
        <Container>
          <Logo source={require('../../assets/images/wow-logo.png')} />
          <StyledText>WowMounts</StyledText>
          <Description>
            <StyledDesc>Bienvenue en Azeroth soldat !</StyledDesc>
            <StyledDesc>
              Ici vous retrouverez tout ce qu'il faut pour devenir un vrai
              guerrier et survivre dans ce monde
            </StyledDesc>
            <StyledDesc>
              Montures, Métiers, et même un petit jeton pour vous aider à garder
              l'oeil sur le cours du PO
            </StyledDesc>
            <StyledDesc>Si vous avez tout compris, commencons !</StyledDesc>
            <CloseContainer>
              <CloseText onPress={() => setOpen(false)}>X</CloseText>
            </CloseContainer>
          </Description>
        </Container>
      ) : null}
    </SafeAreaView>
  );
};

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  backgroundVideo: {
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
});

const Logo = styled.Image`
  margin-top: 5px;
  width: 100%;
  height: 140px;
`;

const Container = styled.View`
  height: 95%;
  background-color: rgba(255, 255, 255, 0.8);
  width: 85%;
  align-self: center;
  margin-top: 5%;
  border-radius: 10px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 10px;
  align-self: center;
  color: black;
`;

const Description = styled.View`
  height: 100%;
  padding-left: 5%;
  padding-right: 5%;
`;

const StyledDesc = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  color: black;
`;

const CloseContainer = styled.View`
  align-self: center;
`;

const CloseText = styled.Text`
  color: red;
  font-size: 30px;
`;

export default Home;
