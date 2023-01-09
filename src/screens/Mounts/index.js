import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import axiosClient from '../../config/axiosClient';
import MountComponent from '../../components/Mounts/MountComponent';
import Loading from '../../components/Global/Loading';
import Pagination from '../../components/Mounts/Pagination';

const Mounts = () => {
  const [mounts, setMounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [slice, setSlice] = useState([0, 10]);
  const [page, setPage] = useState(1);

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
      data={mounts.slice(slice[0], slice[1])}
      renderItem={({item}) => <MountComponent id={item.id} />}
      keyExtractor={item => item.id}
      ListFooterComponent={
        <Pagination
          page={page}
          setPage={setPage}
          slice={slice}
          setSlice={setSlice}
        />
      }
    />
  );
};

export default Mounts;
