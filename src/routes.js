import { createStackNavigator , createAppContainer } from 'react-navigation'
import Main from './pages/main'

const AppNavigator  = createStackNavigator ({
    Home: {
        screen: Main
    }
},
{
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#389ca0',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

export default createAppContainer(AppNavigator)