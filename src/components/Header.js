import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {  SafeAreaView } from 'react-native-safe-area-context';
import BackArrow from 'constants/BackArrow';

const Header = () => {
	const navigation = useNavigation();

    return (
        <View style={styles.absolute}>
            <SafeAreaView edges={["top", "left", "right"]}>
                <TouchableOpacity style={styles.button} onPress={() =>navigation.goBack()}>
                    <BackArrow size={36} />
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 16,
    right: 16,
    zIndex: 1
  },
  button : {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Header;
