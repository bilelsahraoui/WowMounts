import React, {useEffect, useState} from 'react';
import DungeonDetails from '../../components/DungeonRaid/DungeonDetails';
import axiosClient from '../../config/axiosClient';
import Loading from '../../components/Global/Loading';
import {useNavigation} from '@react-navigation/native';
import ErrorComponent from '../../components/Global/ErrorComponent';

const DungeonRaid = ({route}) => {
  const [dungeon, setDungeon] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    axiosClient
      .get(
        `https://eu.api.blizzard.com/data/wow/mythic-keystone/dungeon/${route.params.id}?namespace=dynamic-eu&locale=fr_FR`,
      )
      .then(res => {
        setDungeon(res.data);
        setLoading(false);
        setError(false);
        navigation.setOptions({title: dungeon.name});
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [route.params.id, navigation, dungeon.name]);
  return loading ? (
    <Loading />
  ) : error ? (
    <ErrorComponent />
  ) : (
    <DungeonDetails dungeon={dungeon} image={route.params.image} />
  );
};

export default DungeonRaid;
