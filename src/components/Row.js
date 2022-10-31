import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import MovieItem from './MovieItem';

const { width } = Dimensions.get('window');

const Row = props => 
    <View style={styles.container}>
        {
            props.title && <Text style={styles.title}>{props.title}</Text>
        }

        <FlatList
            horizontal
            pagingEnabled
            snapToInterval={props.wide ? width - 20 : 220}
            showsHorizontalScrollIndicator={false}
            data={props.data}
            renderItem={({item}) => (
                <MovieItem item={item} wide={props.wide}/>
            )}
            keyExtractor={item => item.id}
        />
    </View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: '#CFD0D4',
        fontSize: 20,
        margin: 20,
        fontWeight: '700'
    }
});
export default Row;
