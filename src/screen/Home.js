import { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import Row from 'components/Row';
import Logo from 'constants/Logo';
import { getFavoriteAsync, getMovieAsync } from 'store/dataSlice';

const Home = () => {
  const dispach = useDispatch();
  const { list } = useSelector(state => state.data);

  useEffect(() => {
    dispach(getMovieAsync());
    dispach(getFavoriteAsync());
  }, []);
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C252E' }} edges={["top", "left", "right"]}>
      <View style={styles.container}>
          <ScrollView>
              <View style={styles.logo}>
                  <Logo size={35}/>
              </View>
              <Row data={list.best} title="" wide/>
              <Row data={list.popularity} title="Populer"/>
              <Row data={list.average} title="Vote Average"/>
              <Row data={list.kids} title="Kids"/>
          </ScrollView>
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C252E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    padding: 20,
    marginBottom: 10,
  }
});

export default Home;
