import { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'components/Header';
import { apiKey, cdnURL, client, clientURL } from 'store/axios';
import Favorite from 'constants/Favorite';
import { addFavorite, setLoading } from 'store/dataSlice';
import { dateYear } from 'utils/date';
import { numberFormating } from 'utils/numberFormating';

const { width } = Dimensions.get('window');

const Detail = props => {
  const dispatch = useDispatch();
  const { favorites } = useSelector(state => state.data);
  const [movie, setMovie] = useState([]);

  const addFav = () => {
    dispatch(addFavorite(movie.id));
  }

  const getData = async () => {
    dispatch(setLoading());
    const res = await client.get(clientURL.detail + props.route.params.id + apiKey);
    setMovie(res.data);
    dispatch(setLoading());
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <>
          <Image style={styles.image} source={{ url: cdnURL + movie.poster_path}} />
          <Text style={styles.title}>{movie.title}</Text>
          <View style={styles.textContainer}> 
            <Text style={styles.text}>{dateYear(movie.release_date)}</Text>
            <Text style={styles.text}>Imdb {numberFormating(movie.vote_average)}</Text>
            {
              movie.adult ? <Text style={styles.text}>18+</Text> : <Text style={styles.text}>7+</Text>
            }
            {
              movie.genres && <Text style={styles.text}>{movie?.genres[0].name}</Text>
            }
            <TouchableOpacity style={styles.favorite}  onPress={addFav}>
              <Favorite size="21" color={favorites.includes(movie?.id) && '#01AAE1'}/>
            </TouchableOpacity>
          </View>
          <Text style={styles.overview}>{movie.overview}</Text>
        </>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C252E',
  },
  image: {
    width,
    height: width * 1.5,
  },
  title: {
    color: '#F4F4F4',
    fontSize: 24,
    padding: 16,
    fontWeight: '700'
  },
  text: {
    fontSize: 16,
    color: '#B5B5B5',
  },
  overview: {
    padding: 16,
    fontSize: 16,
    color: '#B5B5B5',
    marginBottom: 30
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    height: 100,
    zIndex: 1000
  },
  favorite: {
    paddingVertical: 10,
    paddingLeft: 10,
  }
});

export default Detail;
