import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';

const Loading = () => {
    const { loading } = useSelector(state => state.data);

    return (
        loading &&
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Loading;
