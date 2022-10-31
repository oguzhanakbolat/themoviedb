import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from 'screen/Home';
import Detail from 'screen/Detail';
import Loading from 'components/Loading';

const Stack = createNativeStackNavigator();

const Navigation = () =>
    <>
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
        <Loading />
    </>

export default Navigation;
