App Sample: 

![Image](https://github.com/user-attachments/assets/4b1db9cd-d82f-4659-8aa1-0b1ae07ade26)

# React Navigation

## Initiate a new Project
```
npx @react-native-community/cli@latest init NavigationSample
```
## Install Dependencies
```
yarn add @react-navigation/native 
yarn add @react-navigation/native-stack
yarn add @react-navigation/elements
yarn add react-native-screens 
yarn add react-native-safe-area-context
```

## Usage
Edit App.tsx
```
import RootStack from './src/navigation';

function App() {
  return (
      <RootStack />
  );
}

export default App;
```

Create Navigation file

```
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
```

### Creating Screens
Create all the screens in seperate files i.e.- HomeScreen, ProfileScreen, SearchScreen.

### Add navigation flow
Add the navigation functions in the screen components.

```
 const navigation = useNavigation();
 // Navigate to Search Screen
 navigation.navigate("Search");
 // Navigate to Profile Screen
 navigation.navigate("Profile");
 // Navigate to Home Screen
 navigation.navigate("Home");
 ```


Reference: https://reactnavigation.org/docs/hello-react-navigation/?config=dynamic

https://reactnative.dev/docs/navigation