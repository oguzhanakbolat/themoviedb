import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { cdnURL } from 'store/axios';
import Favorite from 'constants/Favorite';
import { dateYear } from 'utils/date';
import { numberFormating } from 'utils/numberFormating';

const { width } = Dimensions.get('window');

const MovieItem = props => {
	const navigation = useNavigation();
  const { favorites } = useSelector(state => state.data);

  const navigate = () => {
    navigation.navigate('Detail', { id: props.item.id });
  }

  return (
    <TouchableOpacity style={props.wide ? styles.containerWide : styles.container} onPress={ navigate }>
      <View style={props.wide ? styles.imageContainerWide : styles.imageContainer}>
        <Image style={props.wide ? styles.imageWide : styles.image} source={{ url: cdnURL + props.item.poster_path}} />
      </View>
  
      {
        props.wide ?
          <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.9)']} style={styles.gradientWide}>
              <Text style={styles.titleWide}>{props.item.title}</Text>
          </LinearGradient>
        :
          <>
            <View style={styles.information}>
              <Text style={styles.date}>{dateYear(props.item.release_date)}</Text>
              <View style={styles.vote}>
                <Text style={styles.voteText}>{numberFormating(props.item.vote_average)}</Text>
              </View>
            </View>
            <Text style={styles.title}>{props.item.title}</Text>
          </>
      }
      
      <View style={styles.favorite}>
        <Favorite size="21" color={favorites.includes(props.item.id) && '#01AAE1'}/>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginLeft: 20
  },
  containerWide: {
    width: width - 40,
    marginLeft: 20,
    marginBottom: 20
  },
  imageContainer: {
    overflow: 'hidden',
    width: 200,
    height: 310,
    borderBottomWidth: 10,
    borderRadius: 15,
    borderBottomColor: '#01AAE1',
  },
  imageContainerWide: {
    overflow: 'hidden',
    width: width - 40,
    height: 200,
    borderRadius: 15,
  },
  image: {
    width: 200,
    height: 300,
  },
  imageWide: {
    width: width - 40,
    height: 200,
  },
  information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  date: {
    color: '#B5B5B5',
    paddingVertical: 10,
    marginVertical: 3,
  },
  vote: {
    backgroundColor: '#B5B5B5',
    paddingVertical: 3,
    marginVertical: 10,
    paddingHorizontal: 7,
    borderRadius: 5,
  },
  voteText: {
    color: '#1C252E',
    fontWeight: '700',
  },
  title: {
    minHeight: 60,
    fontSize: 16,
    width: 200,
    color: '#B5B5B5',
  },
  titleWide: {
    color: '#f4f4f4',
    fontSize: 20,
  },
  gradientWide: {
    position: 'absolute',
    width: width - 40,
    height: 200,
    justifyContent: 'flex-end',
    padding: 20,
    borderRadius: 15,
  },
  favorite: {
    position: 'absolute',
    top: 16,
    right: 16,
  }
});

export default MovieItem;
