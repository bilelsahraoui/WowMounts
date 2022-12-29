import React from 'react';
import {SafeAreaView, Dimensions, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import DescriptionComponent from '../../components/Home/DescriptionComponent';

const Home = () => {
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
      <DescriptionComponent />
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

export default Home;
