import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import SearchScreen from '../screen/SearchScreen';
import { createStaticNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator({
    screens: {
        Home: {
            screen: HomeScreen,
            options: { title: 'Welcome'}
        },
        Profile: {
            screen: ProfileScreen,
            options: { title: 'Profile'}
        },
        Search: {
            screen: SearchScreen,
            options: { title: 'Search'}
        },
    }
});

const Navigation = createStaticNavigation(Stack);
const RootStack = () => {
    return (
        <Navigation />
    );
};

export default RootStack;