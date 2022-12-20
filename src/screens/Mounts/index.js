import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import axiosClient from '../../config/axiosClient';
import MountComponent from '../../components/Mounts/MountComponent';
import Loading from '../../components/Global/Loading';

const Mounts = () => {
  const [mounts, setMounts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosClient
      .get(
        'https://eu.api.blizzard.com/data/wow/mount/index?namespace=static-eu&locale=fr_FR',
      )
      .then(res => {
        setMounts(res.data.mounts);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <FlatList
      data={mounts}
      renderItem={({item}) => <MountComponent id={item.id} />}
      keyExtractor={item => item.id}
    />
  );
};

export default Mounts;
