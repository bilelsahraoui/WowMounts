import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import axios from 'axios';
import MountComponent from '../../components/Mounts/MountComponent';

const Mounts = () => {
  // const [mounts, setMounts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://eu.api.blizzard.com/data/wow/mount/index?namespace=static-eu&locale=fr_FR&access_token=EUclt1NLzwNE3NmGlDndFqDTFIsp85g6z6',
  //     )
  //     .then(res => {
  //       setMounts(res.data.mounts);
  //     });
  // }, []);

  return null;
  // <FlatList
  //   data={mounts}
  //   renderItem={({item}) => <MountComponent id={item.id} />}
  //   keyExtractor={item => item.id}
  // />
};

export default Mounts;
